import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftNewsCard from "./LeftNewsCard";
import { PropTypes } from 'prop-types';



const LeftSideNav = ({ filterData }) => {
    const [categories, setCategory] = useState([]);
    const [allNews, setAllNews] = useState([]);
    const [randomNews, setRandomNews] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    const getCategoryNameById = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown';
    };

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, []);

    useEffect(() => {
        if (allNews.length > 0) {
            const getRandomNews = () => {
                const randomIndices = [];
                const maxIndex = allNews.length;
                const numNewsToSelect = 3;

                // Generate 3 unique random indices
                while (randomIndices.length < numNewsToSelect) {
                    const randomIndex = Math.floor(Math.random() * maxIndex);
                    if (!randomIndices.includes(randomIndex)) {
                        randomIndices.push(randomIndex);
                    }
                }

                // Select news articles using random indices
                const selectedNews = randomIndices.map(index => allNews[index]);
                setRandomNews(selectedNews);
            };

            getRandomNews();
        }
    }, [allNews]);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        filterData(categoryId)
    };

    return (
        <div className="">
            <div className="">
                <h1 className="text-xl font-semibold mb-5">All Category</h1>
                <div className="space-y-7">
                    {categories.map(category => (
                        <NavLink
                            key={category.id}
                            to={`/category/${category.id}`}
                            className={`block ml-4 text-xl text-[#9F9F9F] font-medium rounded-md py-4  ${activeCategory === category.id ? 'bg-[#E7E7E7] text-black text-center' : ''
                                }`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="mt-7">
                {randomNews.map((randomNew, idx) => (
                    <LeftNewsCard
                        key={idx}
                        randomNew={randomNew}
                        getCategoryNameById={getCategoryNameById}
                    />
                ))}
            </div>
        </div>
    );
};

LeftSideNav.propTypes = {
    filterData: PropTypes.func.isRequired,
};

export default LeftSideNav;
