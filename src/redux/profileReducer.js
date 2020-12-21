const ADD_POST = 'ADD-POST';
const CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT';


const profileReducer = (state, action) => {

  if(action.type === ADD_POST) {

    let newPost = {
      id: 5,
      message: state.newTextarea,
      likes: 0
    }
    state.posts.push(newPost);
    state.newTextarea = '';

  } else if(action.type === CHANGE_TEXTAREA_TEXT) {

    state.newTextarea = action.newText;

  }

  return state;
}

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}

export const changeTextareaTextActionCreator = (text) => {
  return {type: CHANGE_TEXTAREA_TEXT, newText: text}
}

export default profileReducer;