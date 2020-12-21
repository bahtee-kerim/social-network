const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';


const dialogsReducer = (state, action) => {
  
  if (action.type === ADD_MESSAGE) {

    let body = state.newMessageText;
    state.newMessageText  = "";
    state.messages.push({id: 4, message: body});

  } else if (action.type === CHANGE_MESSAGE) {

    state.newMessageText = action.message;

  }

  return state;
}

export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE}
}

export const changeMessageCreator = (body) => {
  return {type: CHANGE_MESSAGE, message: body}
}

export default dialogsReducer;