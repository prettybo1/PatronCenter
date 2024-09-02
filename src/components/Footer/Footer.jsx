import React from "react";
import "./Footer.scss";
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlinePhone } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <h3>Контакти</h3>

      <div className="footer-content">
        <div className="footer-map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.2478279387924!2d30.47936567620925!3d50.38057849239268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9023acf44b7%3A0x13d9ff87e7cf7eb5!2sPatron%20Pets%20Center!5e0!3m2!1sru!2sua!4v1723997038001!5m2!1sru!2sua"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        <div className="footer-contacts">
          <p>
            <TfiLocationPin />
            проспект Академіка Глушкова, 1
          </p>
          <p>
            <AiOutlineMail />
            Help@patron.center
          </p>
          <p>
            <AiOutlinePhone />
            +380 95 911 1110
          </p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/patron.center/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/+-iK0ye5kTJ8zOTli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.facebook.com/patron.center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
        
        <div className="footer-qr">
          <img src="/qr-code/petqr-code.png" alt="QR Code" />
        </div>
      </div>
    </footer>
  );
}
