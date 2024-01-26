import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] gap-5 px-4 py-4 mt-8">
            <button className="text-xl font-medium text-white py-2 px-6 bg-[#D72050]">Latest</button>
            <Marquee className="" pauseOnHover={true}>
                <Link to={"/news"}>I can be a React component, multiple React components, or just some text......</Link> #
                <Link to={"/news"}>I can be a React component, multiple React components, or just some text......</Link> #
                <Link to={"/news"}>I can be a React component, multiple React components, or just some text......</Link> #
            </Marquee>
        </div>
    );
};

export default BreakingNews;