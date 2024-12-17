import './card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ id, title, image }) {

    return (
        <>
        <Link to={`/P11_Kasa_OC/logement/${id}`}>
            <article className='Card' style={{ backgroundImage: `url(${image})`}}>
            <h2>{title}</h2>
            </article>
        </Link>
        </>
    )
  }

  Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string
  }

  export default Card