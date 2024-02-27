import '../CSS/Carousel.css'

import React, { useState } from 'react';

const ImageCarousel = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex].url} alt="carousel" />
      <button onClick={goToPrevious}> <img alt='previous' src='https://cdn-icons-png.flaticon.com/128/507/507257.png'/>  </button>
      <button onClick={goToNext}> <img alt='Next' src='https://cdn-icons-png.flaticon.com/128/271/271226.png' /> </button>
      <button id='closeButton' onClick={onClose}><img alt='close' src='https://cdn-icons-png.flaticon.com/128/1828/1828665.png'/></button>
      
    </div>
  );
};

export default ImageCarousel;
