import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-main">
          <div className="logo">
            <img src="/header_logo/headerLogoHQ.png" alt="logo" />
          </div>
          <div className='list'>
          <ul>
            <li>Про нас</li>
            <li>Наші улюбленці</li>
            <li>Адреса</li>
          </ul>
          </div>
          <div className="buttons">
            <button className="primary-button">Допомогти притулку</button>
          </div>
        </div>
      </div>
    </header>
  );
}
