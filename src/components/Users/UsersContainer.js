import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPages, setTotalCount, setUsers, toggleLoading, unFollow } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../../common/Preloader';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.toggleLoading(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount)
      });
  }

  onChangedPage = (currentPage) => {
    this.props.setCurrentPages(currentPage)
    this.props.toggleLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.toggleLoading(false)
        this.props.setUsers(response.data.items);
      });
    
  }

  render() {

    return <>
          {this.props.isLoading ? <Preloader /> : null}
          <Users onChangedPage={this.onChangedPage}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  unFollow={this.props.unFollow}
                  follow={this.props.follow}
                  totalCount={this.props.totalCount}
                  count={this.props.count}
                  isLoading={this.props.isLoading}  />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  }
}

/*const mapDispatchToProps = (dispatch) => {
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
    },
    toggleLoadingAC: (isLoading) => {
      dispatch(toggleLoadingAC(isLoading))
    }
  }
}*/

const UsersContainer = connect(mapStateToProps, {follow, unFollow, setUsers, setTotalCount, setCurrentPages, toggleLoading})(UsersAPIContainer);

export default UsersContainer;