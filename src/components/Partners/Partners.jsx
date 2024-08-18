import React from "react";
import "./Partners.scss"

// Массив с логотипами партнеров
const partners = [
    { id: 1, name: "Partner 1", image: "partners_logo/club4paws.png" },
    { id: 2, name: "Partner 2", image: "partners_logo/rokada.jpg" },
    { id: 3, name: "Partner 3", image: "partners_logo/Silpo.svg" },
    { id: 4, name: "Partner 4", image: "partners_logo/USAVA.png" },
    // Добавьте больше партнеров при необходимости
  ];

export default function Partners() {
    return(
        <section className="Partners">
            <h2>
                Наші партнери
            </h2>
            <div className="partners-logos">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.image} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
    );
}