import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSideNav from './../Shared/LeftSideNav/LeftSideNav';
import BreakingNews from "./BreakingNews";
import HomeMiddleCard from "./HomeMiddleCard";


const Home = () => {
    const [allNews, setAllNews] = useState([])
    const [displayData, setDisplayData] = useState([])

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                setAllNews(data)
                setDisplayData(data)
            })

    }
        , [])

    const filterData = (id) => {
        if (id == 0) {
            setDisplayData(allNews);
        } else {
            const filtered = allNews.filter(news => news?.category_id === id);
            setDisplayData(filtered);
        }


    }

    const navInfo = {
        button_text: "Login",
        button_link: "/login",
    }

    return (
        <div className="font-Poppins max-w-6xl mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar
                navInfo={navInfo}
            ></NavBar>


            <div className="grid grid-cols-1  md:grid-cols-4 gap-6">

                <div className=" ">
                    <LeftSideNav
                        filterData={filterData}
                    ></LeftSideNav>
                </div>

                <div className="md:col-span-2">
                    {
                        displayData.map((news) => <HomeMiddleCard
                            key={news._id}
                            news={news}
                        ></HomeMiddleCard>)
                    }

                </div>

                <div className=" ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;