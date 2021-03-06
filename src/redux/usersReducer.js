const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGES = 'SET_CURRENT_PAGES';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGlE_FOLLOWERS = 'TOGGlE_FOLLOWERS';

let initialState = {
  users: [],
  totalCount: 0,
  count: 100,
  currentPage: 1,
  isLoading: false
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    
    case SET_USERS:
      return {
        ...state,
        users: [ ...action.users ]
      }

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.count
      }

    case SET_CURRENT_PAGES:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case TOGGLE_LOADING: 
      return {
        ...state,
        isLoading: action.isLoading
      }

    case TOGGlE_FOLLOWERS: 
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user;
        })
      }

    default:
      return state;
  } 

}

export const toggleFollowers =(userId) => {
  return {type: TOGGlE_FOLLOWERS, userId}
}

export const setUsers = (users) => {
  return {type: SET_USERS, users}
}

export const setTotalCount = (count) => {
  return {type: SET_TOTAL_COUNT, count }
}

export const setCurrentPages = (currentPage) => {
  return {type: SET_CURRENT_PAGES, currentPage}
}

export const toggleLoading = (isLoading) => {
  return {type: TOGGLE_LOADING, isLoading}
}

export default usersReducer;