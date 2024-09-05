import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurPetsSection.scss";

const pets = [
  {
    id: 1,
    name: "Бак",
    height: "40 см",
    description: "Дружелюбный и активный пес, любит играть.",
    image: "/dogs_photo/bak.jpg",
  },
  {
    id: 2,
    name: "Джек",
    height: "50 см",
    description: "Спокойный и умный, идеально подойдет для семьи.",
    image: "/dogs_photo/bak.jpg",
  },
  {
    id: 3,
    name: "Милла",
    height: "35 см",
    description: "Очень ласковая и любящая кошка.",
    image: "/dogs_photo/gibson.jpg",
  },
  {
    id: 4,
    name: "Лаки",
    height: "45 см",
    description: "Энергичный и веселый, любит долгие прогулки. Энергичный и веселый, любит долгие прогулки. Энергичный и веселый, любит долгие прогулки. Энергичный и веселый, любит долгие прогулки.",
    image: "dogs_photo/bob.jpg",
  },
  // Добавьте больше питомцев, если нужно
];

export default function OurPetsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id = "ourPetsSection" className="OurPetsSection">
      <h2>Наші улюбленці</h2>
      <Slider {...settings}>
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <div className="pet-image">
              <img src={pet.image} alt={pet.name} />
            </div>
            <div className="pet-info">
              <h3>{pet.name}</h3>
              <p>
                <strong>Рост:</strong> {pet.height}
              </p>
              <p>{pet.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="buttons">
        <button className="catalogueButton">Подивитись усіх</button>
      </div>
    </section>
  );
}
