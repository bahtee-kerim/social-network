import React from 'react';
import { connect } from 'react-redux';
import {changeMessageCreator, addMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (body) => {
      dispatch(changeMessageCreator(body))
    },
    addNewMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;