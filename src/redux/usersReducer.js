const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    { id: 1, 

      fullName: 'John', 

      imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.  4u5f2HCqpjsxBuGiSDaorgEsDh%26pid%3DApi&f=1', 

      status: 'looking for a job',

      followed: true,

      location: {
        city: 'istanbul',

        country: 'Turkey'
      }
    },

    { id: 2, 

      fullName: 'Katty', 

      imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.4u5f2HCqpjsxBuGiSDaorgEsDh%26pid%3DApi&f=1', 

      status: 'great world',

      followed: false,

      location: {
        city: 'Antalya',

        country: 'Turkey'
      }
    },

    { id: 3, 

      fullName: 'Morgan', 

      imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.4u5f2HCqpjsxBuGiSDaorgEsDh%26pid%3DApi&f=1', 

      status: 'work and play with my dog',

      followed: true,

      location: {
        city: 'New York',

        country: 'United States of America'
      }
    }
  ]
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
        users: [ ...state, ...state.users, ...action.users ]
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

export default usersReducer;