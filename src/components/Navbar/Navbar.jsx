import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';
import Friends from './Friends/Friends';

const Navbar = (props) => {

  return (
    <nav className={n.nav}>
        <div className={`${n.item} ${n.active}`}>
          <NavLink to="/profile" activeClassName={n.activeLink}>Profile</NavLink>
          </div><hr/>
        <div className={n.item}>
          <NavLink to="/dialogs" activeClassName={n.activeLink}>Messages</NavLink>
          </div><hr/>
        <div className={n.item}>
          <NavLink to="/news" activeClassName={n.activeLink}>News</NavLink>
          </div><hr/>
        <div className={n.item}>
          <NavLink to="/musik" activeClassName={n.activeLink}>Musik</NavLink>
          </div><hr/>
        <div className={n.item}>
          <NavLink to="/settings" activeClassName={n.activeLink}>Settings</NavLink>
          </div><hr/>

          

          <div className={n.friends}> <Friends sidebarPage={props.sidebarPage} /> <hr/> </div>

      </nav>
  )
}

export default Navbar;