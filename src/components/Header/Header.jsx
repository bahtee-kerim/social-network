import React from 'react';
import h from './Header.module.css';

const Header = () => {
  return (
    <header className={h.header}>
        <img className={h.hack1} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tHluP4chQzW31oRhD-mqogHaHa%26pid%3DApi&f=1" />
        <img className={h.hack2} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.referralcandy.com%2Fwp-content%2Fuploads%2F2013%2F11%2Fthe-social-network-logo.jpg&f=1&nofb=1" />
      </header>
  )
}

export default Header;