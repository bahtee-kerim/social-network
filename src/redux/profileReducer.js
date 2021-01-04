const ADD_POST = 'ADD-POST';
const CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: "my first post", likes: 15},
    {id: 2, message: "hi, i am a student", likes: 18},
    {id: 3, message: "how are you?", likes: 1},
    {id: 4, message: "great!!!", likes: 151}
  ],

  newTextarea: '',
  profile: null
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

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
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

export const setProfile = (profile) => {
  return {type: SET_PROFILE, profile}
}

export default profileReducer;