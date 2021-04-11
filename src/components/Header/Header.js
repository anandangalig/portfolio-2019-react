import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import MenuMobile from '../MenuMobile/MenuMobile';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <NavLink exact to="/">
            <span className="logo__accent">{'// '}</span>Anand
          </NavLink>
        </div>
        <div className="menu">
          <MenuDesktop />
        </div>
        <div className="menu__mobile">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
