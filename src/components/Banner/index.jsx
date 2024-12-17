import './banner.scss'
import PropTypes from 'prop-types'

function Banner({ title, image, opacity }) {

    return (
        <>
            <div className='Banner' style={{ backgroundImage: `url(${image})`, '--banner-opacity': opacity }}>
            <h1>{title}</h1>
            </div>
        </>
    )
  }

  Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    opacity: PropTypes.number
  }

  export default Banner