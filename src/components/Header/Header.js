import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
// import MenuMobile from '../MenuMobile/MenuMobile';
import './Header.scss';

const Header = props => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink exact to="/">
          <span className="logo__accent">// </span>A. Anand
        </NavLink>
      </div>
      <div className="menu">
        <MenuDesktop />
        {/* <MenuMobile /> */}
      </div>
    </header>
  );
};

export default Header;
