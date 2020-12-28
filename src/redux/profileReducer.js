const ADD_POST = 'ADD-POST';
const CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT';

let initialState = {
  posts: [
    {id: 1, message: "my first post", likes: 15},
    {id: 2, message: "hi, i am a student", likes: 18},
    {id: 3, message: "how are you?", likes: 1},
    {id: 4, message: "great!!!", likes: 151}
  ],

  newTextarea: ''
}


const profileReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        message: state.newTextarea,
        likes: 0
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        newTextarea: ''
      }

    case CHANGE_TEXTAREA_TEXT: 
      return {
        ...state,
        newTextarea: action.newText
      }

    default:
      return state;
  }
  
}

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}

export const changeTextareaTextActionCreator = (text) => {
  return {type: CHANGE_TEXTAREA_TEXT, newText: text}
}

export default profileReducer;