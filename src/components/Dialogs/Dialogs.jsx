import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

  let DialogsElement = props.state.dialogPage.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} src={d.src} /> )
  let MessagesElement = props.state.dialogPage.messages.map( s =>  <Message message={s.message} /> )

  let newMessageElement = React.createRef();

  const addNewMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
    newMessageElement.current.value = '';
  }

  return (
    <div className={d.dialogsWrapper}>
      <div className={d.dialogsList}>

        { DialogsElement }

      </div>
      <div className={d.messagesWrapper}>

      { MessagesElement }

      <textarea ref={newMessageElement} cols="50" rows="5" />

      <button onClick={addNewMessage}>Add message</button>

      </div>
    </div>
  )
}

export default Dialogs;