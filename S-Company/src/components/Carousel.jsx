import React from "react";
import { Carousel } from "react-bootstrap";
import "../CSS/MyCarousel.css"; // Импорт стилей из CSS-файла

function MyCarousel() {
  return (
    <Carousel
      fade
      controls={true}
      indicators={true}
      pause="hover"
      className="carousel shadow-lg"
    >
      {[
        {
          src: "/slider/photo2.jpg",
          alt: "First slide",
          title: "Профессиональная выкладка",
          text: "Оптимизируем размещение товаров для максимальных продаж",
        },
        {
          src: "/slider/image.png",
          alt: "Second slide",
          title: "Эффективный мерчандайзинг",
          text: "Создаем привлекательное торговое пространство",
        },
        {
          src: "/slider/stelaj.png",
          alt: "Third slide",
          title: "Аутсорсинг под ключ",
          text: "Полный контроль выкладки и запасов",
        },
      ].map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image-wrapper">
            <img
              src={slide.src}
              alt={slide.alt}
              className="carousel-image d-block w-100"
            />
            <div className="carousel-overlay" />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">{slide.title}</h3>
            <p className="carousel-text">{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;