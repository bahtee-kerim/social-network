import * as axios from 'axios';
import React from 'react';
import u from './Users.module.css';
import userFoto from './../../assets/images/user1.jpeg'


class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`)
    .then(response => {
        this.props.setUsersAC(response.data.items);
        this.props.setTotalCountAC(response.data.totalCount)
      });
  }

  onChangedPage = (currentPage) => {
    this.props.setCurrentPagesAC(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`)
    .then(response => {
        this.props.setUsersAC(response.data.items);
      });
    
  }

  render() {

    let allPages = [];
    let pages = Math.ceil(this.props.totalCount / this.props.count);
    for(let i = 1; i <= pages; i++) {
      allPages.push(i);
    }

    return <div>

    {allPages.map(count => {
      return <span onClick={() => 
            {this.onChangedPage(count)}} 
            className={this.props.currentPage === count && u.selected}>
            {count} </span>
    })}
    
    {this.props.users.map(user => {
      return <div key={user.id} className={u.wrapper}>
              <div className={u.profile}>
                <div> <img src={user.photos.small || userFoto} /> </div>
                  {user.followed
                    ? <div> <button onClick={() => {this.props.unfollow(user.id)}}> Follow </button> </div>
                    : <div> <button onClick={ () => {this.props.follow(user.id)}}> Unfollow </button> </div>
                  }
              </div>
              <div>
                <div className={u.name}> {user.name} </div>
                <div className={u.status}> {user.status || 'no status'} </div>
              </div>
              <div>
                <div className={u.aidi}>This is id of user: {user.id} </div>
                <div> {""} </div>
              </div>
            </div>
    })}
  </div>
  }
}

export default Users;