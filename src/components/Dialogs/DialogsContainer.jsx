import React from 'react';
import {changeMessageCreator, addMessageActionCreator} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  let dialogs = props.store.getState().dialogPage.dialogs;
  let messages = props.store.getState().dialogPage.messages;
  let newMessage = props.store.getState().dialogPage.newMessageText;


  const changeMessage = (body) => {
    props.store.dispatch(changeMessageCreator(body));
  }

  const addNewMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  return (
    <Dialogs changeMessage={changeMessage} addNewMessage={addNewMessage} dialogs={dialogs} messages={messages} newMessage={newMessage} />
  )
}

export default DialogsContainer;