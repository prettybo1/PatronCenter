import React from "react";
import "./Header.scss";
import { Link } from "react-scroll";

export default function Header() {
  // Функция для обработки клика по кнопке
  const handleButtonClick = () => {
    window.open("https://send.monobank.ua/jar/7djZ5jubgj", "_blank");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-main">
          <div className="logo">
            <img src="/header_logo/headerLogoHQ.png" alt="logo" />
          </div>
          <div className="list">
            <ul>
              <li>
                <Link to="aboutUs" smooth={true} duration={800}>
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="ourPetsSection" smooth={true} duration={800}>
                  Наші улюбленці
                </Link>
              </li>
              <li>
                <Link to="footerAdress" smooth={true} duration={800}>
                  Адреса
                </Link>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button className="primary-button" onClick={handleButtonClick}>
              Допомогти притулку
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
