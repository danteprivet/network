import React from 'react';
import Nav_barr from './Nav-bar.module.css';
import {NavLink} from 'react-router-dom';

const Nav_bar = () => {
  return (
  <nav className={Nav_barr.nav}>
   <div className={Nav_barr.item}>
    <NavLink to="/profile" activeClassName={Nav_barr.activeLink}> Profile</NavLink>
   </div>
   <div className={Nav_barr.item}>
     <NavLink to="/dialogs" activeClassName={Nav_barr.activeLink}>Messages</NavLink>
   </div>
   <div className={Nav_barr.item}>
     <NavLink to="/news" activeClassName={Nav_barr.activeLink}>News</NavLink>
   </div>
   <div className={Nav_barr.item}>
    <NavLink to="/music" activeClassName={Nav_barr.activeLink}>Music</NavLink>
   </div>
   <div className={Nav_barr.item}>
    <NavLink to="/settings" activeClassName={Nav_barr.activeLink}>Settings</NavLink>
   </div>
  </nav>
)
}

export default Nav_bar;
