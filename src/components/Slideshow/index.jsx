import './slideShow.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useCallback } from 'react';

function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion du passage à l'image suivante
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  // Gestion du retour à l'image précédente
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  // Effet pour gérer la navigation au clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);
  // Avec useEffect, les écouteurs d'événements sont correctement nettoyés lors du démontage du composant. du coup = pas de bug
  // par contre je dois utiliser useCallback sur mes fonctions nextSlide, prevSlide => pour les mémoriser et éviter de Rerender

  // Si il n'y a qu'une seule image = pas de boutons et pas de compteur
  if (images.length === 1) {
    return (
      <div className="slideShow" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      </div>
    );
  }

  return (
    <div className="slideShow" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <button className="prevButton" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} className='slideChevron' />
      </button>
      <button className="nextButton" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} className='slideChevron' />
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
