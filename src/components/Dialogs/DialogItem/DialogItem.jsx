import React from 'react';
import d from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  
  return (
    <div className={`${d.dialog} ${d.activeDialog}`}>
      <img src={props.src} />
      <NavLink to={`/dialogs/${props.id}`} activeClassName={d.activeLink}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;