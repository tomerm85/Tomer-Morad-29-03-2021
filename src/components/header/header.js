import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="navigation-header">
      <span className="weather-task-text">Herolo Weather Task</span>
      <div className="navigation-links">
        <NavLink exact to="/" className="navlink home-link" activeClassName="active">Home</NavLink>
        <NavLink to="/favorites" className="navlink avorites-link" activeClassName="active">Favorites</NavLink>
      </div>
    </header>
  )
};

export default Header;
