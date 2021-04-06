import React from 'react';
import MessageStyle from './MessageStyle.module.css';


const Message = (props) => {

let newMessageElement = React.createRef();

let sendMessage = () => {
let message = newMessageElement.current.value;
alert(message);
}

  return (
    <div className={MessageStyle.dialog}>
    <textarea ref={newMessageElement}></textarea>
       {props.message}
       <button onClick = {sendMessage}>Send message</button>
     </div>
  )
}

export default Message;
