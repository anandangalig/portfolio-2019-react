import React from 'react';
import './Header.scss';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import MenuMobile from '../MenuMobile/MenuMobile';

const Header = props => {
  return (
    <header className="header">
      <div id="logo">// Anand Angalig</div>
      <div className="menu">
        <MenuDesktop />
        <MenuMobile />
      </div>
    </header>
  );
};

export default Header;
