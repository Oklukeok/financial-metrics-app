import React from 'react';
import logo from '../assets/img/logo.svg';

const Navbar = () => (
  <nav>
    <img className="logo" src={logo} alt="logo" />
    <h1>Crypto Realm</h1>
  </nav>
);

export default Navbar;
