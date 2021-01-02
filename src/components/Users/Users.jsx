import React from 'react';
import u from './Users.module.css';
import userFoto from './../../assets/images/user1.jpeg';



const Users = (props) => {

  let allPages = [];
    let pages = Math.ceil(props.totalCount / props.count);
    for(let i = 1; i <= pages; i++) {
      allPages.push(i);
    }

    return <div>

    {allPages.map(count => {
      return <span onClick={() => 
            {props.onChangedPage(count)}} 
            className={props.currentPage === count && u.selected}>
            {count} </span>
    })}
    
    {props.users.map(user => {
      return <div key={user.id} className={u.wrapper}>
              <div className={u.profile}>
                <div> <img src={user.photos.small || userFoto} /> </div>
                  {user.followed
                    ? <div> <button onClick={() => {props.unfollow(user.id)}}> Follow </button> </div>
                    : <div> <button onClick={ () => {props.follow(user.id)}}> Unfollow </button> </div>
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

export default Users;