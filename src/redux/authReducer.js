const SET_AUTH_USER = 'SET_AUTH_USER-POST';


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}


const authReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case SET_AUTH_USER: 
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state;
  }
  
}

export const setAuthUser = (id, email, login) => {
  return {type: SET_AUTH_USER, data: {id, email, login}}
}

export default authReducer;