import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="link-left-container">
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/Catalogue" activeClassName="active">
          Projets Scolaire
        </NavLink>
      </div>
      <NavLink to="/">
        {" "}
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQE585ZqeKylIQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713864554443?e=1752105600&v=beta&t=GqxF4mCK6MqBVQji9FRnoUHurQG8H1qiL9TLflv-pnE"
          alt="logo"
        />
      </NavLink>
      <div className="link-right-container">
        {/* <NavLink to="/Render" target="_blank" activeClassName="active">CV</NavLink> */}
        <a
          href="https://drive.google.com/file/d/1UgIPlLNhY5uKrJ_39ETmAZEGLZ1a_rcf/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          CV
        </a>
        <a
          href="https://drive.google.com/file/d/1veNJvBiC27O8eCcCVl1z0jUcvc2welk3/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Tableau de Synthèse
        </a>
        <NavLink to="/Contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
