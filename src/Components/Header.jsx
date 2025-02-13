import React from 'react';
import '../Styles/Header.css';
import logoTeam from '/logo/logo-equipe.png'
import joueur from "/logo/Logo_Capteurs_portés_par_les_joueurs.png"

function Header() {
  return (
    <header className="header">
      <img src={logoTeam}  alt="Left Logo" className="logo left" />
      <h1 className="header-text">Start The Game</h1>
      <img src={joueur} alt="Right Logo" className="logo right" />
    </header>
  );
}

export default Header;
