
import PropTypes from 'prop-types';
import './RatingStar.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStar = ({ totalStars, rating }) => {
    const stars = [];

    // Calculate full stars
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="star orange" />);
    }

    // Calculate half star if needed
    if (rating % 1 >= 0.5) {
        stars.push(<FaStarHalfAlt key={stars.length} className="star orange" />);
    }

    // Fill remaining stars with gray stars
    const remainingStars = totalStars - stars.length;
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<FaStar key={stars.length + i} className="star gray" />);
    }

    return (
        <div className="rating-stars">
            {stars}
        </div>
    );
};

RatingStar.propTypes = {
    totalStars: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};

export default RatingStar;
