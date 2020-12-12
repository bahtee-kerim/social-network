import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

  let DialogsElement = props.state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} src={d.src} /> )
  let MessagesElement = props.state.messages.map( s =>  <Message message={s.message} /> )

  return (
    <div className={d.dialogsWrapper}>
      <div className={d.dialogsList}>

        { DialogsElement }

      </div>
      <div className={d.messagesWrapper}>

      { MessagesElement }

      </div>
    </div>
  )
}

export default Dialogs;