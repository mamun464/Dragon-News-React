import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSideNav from './../Shared/LeftSideNav/LeftSideNav';
import BreakingNews from "./BreakingNews";
import HomeMiddleCard from "./HomeMiddleCard";


const Home = () => {
    const [allNews, setAllNews] = useState([])

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }
        , [])

    return (
        <div className="font-Poppins ">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>

            <h1 className="text-3xl">This is Home</h1>
            <div className="grid grid-cols-1  md:grid-cols-4 gap-6">

                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2">
                    {
                        allNews.map((news, idx) => <HomeMiddleCard
                            key={idx}
                            news={news}
                        ></HomeMiddleCard>)
                    }

                </div>

                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;