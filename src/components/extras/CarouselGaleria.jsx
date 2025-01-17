import React, { useState, useEffect } from "react";
import "../views/styles/Galeria.css"; // Archivo para estilos personalizados

const CarouselGaleria = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4); // Por defecto, 4 imágenes visibles

  // Detecta el tamaño de la pantalla y ajusta las imágenes visibles
  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth <= 768) {
        setVisibleImages(1); // 1 imagen en teléfonos
      } else if (window.innerWidth <= 1024) {
        setVisibleImages(3); // 3 imágenes en tablets
      } else {
        setVisibleImages(4); // 4 imágenes en pantallas grandes
      }
    };

    updateVisibleImages(); // Ejecutar al inicio
    window.addEventListener("resize", updateVisibleImages);

    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? images.length - visibleImages : prevIndex - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNext = () => {
    setIndex((prevIndex) => {
      const newIndex =
        prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1;
      return newIndex >= images.length
        ? images.length - visibleImages
        : newIndex;
    });
  };

  return (
    <div className="carousel-wrapper-galeria">
      <button className="carousel-button-galeria" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carousel-container-galeria">
        {images.slice(index, index + visibleImages).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className="carousel-image-galeria"
          />
        ))}
      </div>
      <button className="carousel-button-galeria" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};
export default CarouselGaleria;
