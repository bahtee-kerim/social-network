import React from 'react';
import d from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={`${d.dialog} ${d.activeDialog}`}>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LERsbEWYajAStXlt0uGHpAHaHa%26pid%3DApi&f=1" alt=""/>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;