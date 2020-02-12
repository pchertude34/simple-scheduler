import React from 'react';
import Logo from '../../assets/logo_large.png';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <div className="logo">
          <img src={Logo} alt="Ciara Kay Photogarphy" className="logo-image" />
        </div>
      </div>
      <div className="header-title">
        <h1 className="header-title__text">about ciara</h1>
      </div>
    </div>
  );
}

export default Header;
