import React from 'react';
import DialogsStyle from './Dialogs.module.css'
import Message from './Message/Message.jsx'
import DialogItem from './DialogItem/DialogItem.jsx'

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

  let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

  return (
    <div className={DialogsStyle.dialogs}>
      <div className={DialogsStyle.dialogsItem}>
        {dialogsElements}
      </div>
       <div className={DialogsStyle.messages}>
        {messagesElements}
       </div>
    </div>

  )
}

export default Dialogs;
