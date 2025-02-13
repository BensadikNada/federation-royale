import React from 'react';
import '../Styles/Footer.css';
import suptech from '/logo/log_suptech.png'
import envi from '/logo/logo sup envi.png'
import frdisi from "/logo/logoFrdisi.png"

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.suptech-sante.ma/">
        <img src={suptech} alt="suptech" />
      </a>
      <a href="https://www.suptech-environnement.ma/fr">
        <img src={envi} alt="envi" />
      </a>
      <a href="https://www.frdisi.ma/fr">
        <img src={frdisi} alt="frdisi" />
      </a>
    </div>
  );
}

export default Footer;
