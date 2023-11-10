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
              <a class="footer-link" href="https://angular.io/">
                Angular
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://react.dev/">
                React
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://vuejs.org/">
                Vue
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://laravel.com/">
                Laravel
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <div class="footer-title">USEFUL LINKS</div>
          <ul class="footer-list">
            <li>
              <a class="footer-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Orders
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <div class="footer-title">CONTACT</div> <p>Autor: Haris Gorcevic</p>
          <p>
            <span class="github-icon"></span> GitHub:
            <a
              style={{ color: "white" }}
              href="https://github.com/GorcevicHaris"
            >
              Gorcevic Haris
            </a>
          </p>
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
