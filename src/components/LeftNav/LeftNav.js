import React from 'react';
import Logo from '../../assets/logo_large.png';

import './LeftNav.scss';

function LeftNav() {
  return (
    <div className="left-nav">
      <div className="logo">
        <img src={Logo} alt="Ciara Kay Photogarphy" className="logo-image" />
      </div>
    </div>
  );
}

export default LeftNav;
