import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="link-left-container">
        <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
        <NavLink to="/Catalogue" activeClassName="active">Projets Scolaire</NavLink>
      </div>
      <NavLink to="/"> <img src="https://cdn.discordapp.com/attachments/1129209624810242078/1234505987591901216/1713864554443.png?ex=6713140b&is=6711c28b&hm=3b2e14916f3531582f4cf259b09d654a4845e8b3420d4cc0fd67db99f2d5b3be&" alt='logo'/></NavLink>
      <div className="link-right-container">
        {/* <NavLink to="/Render" target="_blank" activeClassName="active">CV</NavLink> */}
        <a href="https://drive.google.com/file/d/1q-3VSytSwTf2hNvqhMvq9CKbRxOQ_2Ul/view?usp=sharing" rel="noreferrer" target='_blank'> CV</a>
        <a href="https://drive.google.com/file/d/1x676aGnDrDgLNojJd59trHYBcrEDvF_L/view?usp=sharing" rel="noreferrer" target='_blank'> Tableau de Synthèse</a>
        <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;
