import React from 'react';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import MenuMobile from '../MenuMobile/MenuMobile';
import './Header.scss';

const Header = props => {
  return (
    <header className="header">
      <div class="logo">//Anand Angalig</div>
      <div className="menu">
        <MenuDesktop />
        {/* <MenuMobile /> */}
      </div>
    </header>
  );
};

export default Header;
