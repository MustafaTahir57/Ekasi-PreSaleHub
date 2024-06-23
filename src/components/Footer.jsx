import React from "react";
import { lan } from "../language";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = ({language}) => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-component">
          <a
            id="w-node-c23411aa-4530-e93b-7a07-e0e307260fa1-85e878c5"
            href="#"
            className="footer-link inline"
            onClick={() => window.location = 'mailto:contact@clairmeme.com'}
          >
            contact@Ekasi.com
          </a>
        
          <h1>$Ekasi</h1>
          <div className="footer-links">
            {lan[language].footerLinks.map((item,idx) => (
              <a href={item.href} key={idx} className="footer-link">
                {t(item.name)}
              </a>
            ))}
          </div>
        </div>
        <div className="copy-right">
          © 2024 Ekasi. All rights reserveD
        </div>
      </div>
    </footer>
  );
};

export default Footer;
