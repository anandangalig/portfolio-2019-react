import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuDesktop.scss';

const MenuDesktop = props => {
  return (
    <nav className="menu__desktop">
      <ul>
        <li>
          <NavLink exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/projects">
            PROJECTS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
