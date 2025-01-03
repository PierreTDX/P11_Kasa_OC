import './rating.scss';
import PropTypes from 'prop-types';
import StarRating from '../Star';

function Rating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, i) => Math.max(0, Math.min(1, rating - i)));

    return (
        <div className='allStarsNote' >
            <div className='allStars'>
                {stars.map((fill, index) => (

                    <StarRating key={index} fill={fill} />

                ))}
            </div>
            <p className='ratingBubule'>note {rating}/5</p>
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default Rating;
