import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPagesAC, setTotalCountAC, setUsersAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsersAC: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalCountAC: (count) => {
      dispatch(setTotalCountAC(count))
    },
    setCurrentPagesAC: (currentPage) => {
      dispatch(setCurrentPagesAC(currentPage))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;