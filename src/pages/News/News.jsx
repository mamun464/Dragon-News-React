import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import NavBar from "../Shared/NavBar/NavBar";


const News = () => {
    const { id } = useParams();
    const [a_News, setA_News] = useState({})


    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                const foundNews = data.find(item => item._id === id);
                setA_News(foundNews)

            })

    }
        , [id])
    return (
        <div className=" max-w-6xl mx-auto">
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">

                <div className="border col-span-3 p-5 rounded-md mt-10 h-fit">
                    <img className="w-full" src={a_News?.image_url} alt="News_img_ot_found" />
                    <h1 className="text-xl font-bold mt-4">{a_News?.title}</h1>
                    <p className="text-[#706F6F] font-normal mt-8">
                        {a_News?.details}
                    </p>
                    <Link to={'/'}>
                        <button className="flex items-center text-xl font-medium text-white py-3 px-6 mt-5 bg-[#D72050]">
                            <FaArrowLeftLong className="mr-2" /> All news in this category
                        </button>
                    </Link>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;