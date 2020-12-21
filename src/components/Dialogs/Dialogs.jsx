import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {changeMessageCreator, addMessageActionCreator} from './../../redux/dialogsReducer';


const Dialogs = (props) => {

  let DialogsElement = props.state.dialogPage.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} src={d.src} /> )
  let MessagesElement = props.state.dialogPage.messages.map( s =>  <Message message={s.message} /> )
  let newMessageText = props.state.dialogPage.newMessageText;


  const changeMessage = (e) => {
    let body = e.target.value;
    props.dispatch(changeMessageCreator(body));
  }

  const addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className={d.dialogsWrapper}>
      <div className={d.dialogsList}>

        { DialogsElement }

      </div>
      <div className={d.messagesWrapper}>

      <div>{ MessagesElement }</div>

      <div>
        <div><textarea onChange={changeMessage} value={newMessageText} cols="50" rows="5" /></div>
        <div><button onClick={addNewMessage}>Add message</button></div>
      </div>

      

      

      </div>
    </div>
  )
}

export default Dialogs;