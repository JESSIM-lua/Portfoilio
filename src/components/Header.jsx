import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="link-left-container">
        <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
        <NavLink to="/Projets" activeClassName="active">Projets</NavLink>
        <NavLink to="/Catalogue" activeClassName="active">Projets Scolaire</NavLink>
      </div>
      <NavLink to="/"> <img src="https://cdn.discordapp.com/attachments/1129209624810242078/1234505987591901216/1713864554443.png?ex=666e488b&is=666cf70b&hm=fd6d03ae28c088fd923bb9579ba788615fba297e0fc314ae808ee9cde7409573&" alt='logo'/></NavLink>
      <div className="link-right-container">
        <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">Discord</a>
        <NavLink to="/Render"target="_blank" activeClassName="active">CV</NavLink>
        <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;
