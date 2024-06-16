import React from 'react';
import { NavLink } from 'react-router-dom';

const Cvhead = () => {
  return (
    <div>
    <header className='Cvhead'>
      <div className="link-left-container">
        <NavLink exact to="/" activeClassName="active"><h1>Accueil</h1></NavLink>
      </div>
    </header>
    </div>
  );
};

export default Cvhead;
