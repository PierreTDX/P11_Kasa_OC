import './collapse.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from 'react';

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer le "collapse"
  const descriptionRef = useRef(null); // Crée une référence initialisée à 0

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Change l'état
  }

    return (
        <>
            <article className='collapse'>
              <div className={`collapseHeader ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronUp} className="chevron"/>
              </div>
              <p  className='collapseDescription'
                  ref={descriptionRef}
                  style={{
                    maxHeight: isOpen ? `${descriptionRef.current.scrollHeight}px` : "0px", // Ajuste la hauteur en fonction du contenu
                  }}>
                {description}
              </p>
            </article>
        </>
    )
  }

  Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  export default Collapse