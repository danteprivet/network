import React from 'react';
import DialogItemStyle from './DialogItemStyle.module.css';
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
return (
  <div className={DialogItemStyle.dialog}>
     <NavLink to={"/dialogs/" + props.id} className={DialogItemStyle.noactive} activeClassName={DialogItemStyle.active}>{props.name}</NavLink>
  </div>
 )
}

export default DialogItem;
