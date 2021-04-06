import React from 'react';
import logo from './logo.png';
import Headerr from './Header.module.css'

const Header = () => {
return (
  <header className={Headerr.header}>
  <img src = {logo} />
  </header>

)
}
export default Header;
  
