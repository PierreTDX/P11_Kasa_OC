import './slideShow.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Gestion de la navigation au clavier
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === ' ') {
      event.preventDefault(); // Empêche le défilement de la page
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  // Ajouter l'écouteur au niveau global
  window.onkeydown = handleKeyDown;

  // Si une seule image : pas de boutons ni de compteur
  if (images.length === 1) {
    return (
      <div className="slideShow">
        <div className="slides">
          <img src={images[0]} alt={`Slide ${1}`} className="slide" />
        </div>
      </div>
    );
  }

  return (
    <div className="slideShow">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide"
          />
        ))}
      </div>
      <button className="prevButton" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} className="slideChevron" />
      </button>
      <button className="nextButton" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} className="slideChevron" />
      </button>
      <h5>
        {currentIndex + 1}/{images.length}
      </h5>
    </div>
  );
}

SlideShow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlideShow;
