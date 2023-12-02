import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-row">
        <div class="footer-column">
          <div class="footer-title">COMPANY NAME</div>
          <div className="column">
            <p>Here you can use rows and columns</p>
            <p>to organize your footer content.</p>
            <p>Lorem ipsum dolor sit amet, </p>
            <p> consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="footer-column">
          <div class="footer-title">PRODUCTS</div>
          <ul class="footer-list">
            <li>
              <a
                rel="noreferrer"
                class="footer-link"
                target="_blank"
                href="https://www.animesrbija.com/"
              >
                Anime Srbija
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                class="footer-link"
                target="_blank"
                href="https://www.filmovi.me/"
              >
                Filmovizija
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                class="footer-link"
                target="_blank"
                href="https://www.popcornfilmovi.com/"
              >
                Pop Corn
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                class="footer-link"
                target="_blank"
                href="https://gledalica.online/"
              >
                Gledalica
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <div class="footer-title">USEFUL LINKS</div>
          <ul class="footer-list">
            <li>
              <p class="footer-link">Pricing</p>
            </li>
            <li>
              <p class="footer-link">Settings</p>
            </li>
            <li>
              <p class="footer-link">Orders</p>
            </li>
            <li>
              <p class="footer-link">Help</p>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <div class="footer-title">CONTACT</div> <p>Autor: Haris Gorcevic</p>
          <p>Serbia,Novi Pazar</p> <p>© 2023 Vaša Kompanija</p>
          <p>
            <span class="email-icon"></span> Kontakt:
            <a style={{ color: "white" }} href="mailto:info@vaskompanija.com">
              info@vaskompanija.com
            </a>
          </p>
          <p>
            <span class="phone-icon"></span> Telefon: +381 64 557 03 16
          </p>
        </div>
      </div>
    </div>
  );
}
