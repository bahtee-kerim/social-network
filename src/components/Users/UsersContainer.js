import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPagesAC, setTotalCountAC, setUsersAC, toggleLoadingAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import preloader from './../../assets/images/preloader.svg';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleLoadingAC(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.toggleLoadingAC(false)
        this.props.setUsersAC(response.data.items);
        this.props.setTotalCountAC(response.data.totalCount)
      });
  }

  onChangedPage = (currentPage) => {
    this.props.setCurrentPagesAC(currentPage)
    this.props.toggleLoadingAC(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.toggleLoadingAC(false)
        this.props.setUsersAC(response.data.items);
      });
    
  }

  render() {

    return <>
          {this.props.isLoading ? <div style={{marginLeft: '400px'}} ><img src={preloader} /></div> : null}
          <Users onChangedPage={this.onChangedPage}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  totalCount={this.props.totalCount}
                  count={this.props.count}
                  isLoading={this.props.isLoading}
                  toggleLoadingAC={this.props.toggleLoadingAC}  />
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
    },
    toggleLoadingAC: (isLoading) => {
      dispatch(toggleLoadingAC(isLoading))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;