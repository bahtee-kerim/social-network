const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGES = 'SET_CURRENT_PAGES';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

let initialState = {
  users: [],
  totalCount: 0,
  count: 100,
  currentPage: 1,
  isLoading: false
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: 
    return {
      ...state,
      users: state.users.map(user => {
        if(user.id === action.userId) {
          return {...user, followed: true}
        }
        return user;
      })
    }
    
    case UNFOLLOW: 
    return {
      ...state,
      users: state.users.map(user => {
        if(user.id === action.userId) {
          return {...user, followed: false}
        }
        return user;
      })
    }

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

    default:
      return state;
  } 

}

export const followAC = (userId) => {
  return {type: FOLLOW, userId}
}

export const unFollowAC = (userId) => {
  return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
  return {type: SET_USERS, users}
}

export const setTotalCountAC = (count) => {
  return {type: SET_TOTAL_COUNT, count }
}

export const setCurrentPagesAC = (currentPage) => {
  return {type: SET_CURRENT_PAGES, currentPage}
}

export const toggleLoadingAC = (isLoading) => {
  return {type: TOGGLE_LOADING, isLoading}
}

export default usersReducer;