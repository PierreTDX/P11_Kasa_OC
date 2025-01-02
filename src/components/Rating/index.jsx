import './rating.scss';
import PropTypes from 'prop-types';
import StarRating from '../Star';

function Rating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, i) => Math.max(0, Math.min(1, rating - i)));

    return (
        <div className='allStars'>
            {stars.map((fill, index) => (
                <div key={index} className='star-container'>
                    <StarRating fill={fill} /> {/* Passer le `fill` à StarRating */}
                </div>
            ))}
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default Rating;
