
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import RatingStar from "../RatingStar/RatingStar";
import { FaEye } from "react-icons/fa";
import PropTypes from 'prop-types';

const HomeMiddleCard = ({ news }) => {
    const { title, details, total_view, author, image_url, rating } = news;
    return (
        <div className="mb-7">
            <div className="py-5 px-5 flex justify-between items-center bg-[#F3F3F3] rounded-t-md">
                <div className="flex items-center gap-4">
                    <img className="w-10 h-10 rounded-full object-cover" src={author?.img} alt="DP_not_found" />
                    <div>
                        <h1 className="font-semibold text-[#403F3F]">{author?.name}</h1>
                        {author?.published_date && author.published_date.split(' ')[0]}
                    </div>
                </div>
                <div className="flex gap-3 text-[#706F6F] text-2xl">
                    <CiBookmark />
                    <CiShare2 />
                </div>

            </div>

            <div className="p-5 border-x border-b rounded-b-md">
                <h1 className="text-xl font-bold">{title}</h1>
                <img className="mt-5 w-full h-64 object-cover" src={image_url} alt="No_Cover_foto" />
                <p className="text-[#706F6F] font-normal line-clamp-3 mt-8">
                    {details}
                </p>
                <span className="text-[#FF8C47] hover:text-[#F75B5F]"><Link to={"/news"}>Read More</Link></span>
                <hr className="mt-5" />
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                        <RatingStar totalStars={5} rating={rating?.number} />
                        <p className="font-medium text-[#706F6F]">{rating?.number}</p>
                    </div>
                    <div className="text-[#706F6F] flex items-center gap-1 font-medium">
                        <FaEye />
                        <p>{total_view || 0}</p>

                    </div>

                </div>
            </div>

        </div>
    );
};

HomeMiddleCard.propTypes = {
    news: PropTypes.object.isRequired,
};

export default HomeMiddleCard;