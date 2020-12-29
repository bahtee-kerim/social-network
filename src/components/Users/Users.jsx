import React from 'react';
import u from './Users.module.css';

const Users = (props) => {
  
  return <div>
    {props.users.map(user => <div key={user.id}>
      <div>
        <div> <img src={user.imgUrl} /> </div>
        {user.followed
        ? <div> <button onClick={() => {props.unfollow(user.id)}}> Follow </button> </div>
        : <div> <button onClick={ () => {props.follow(user.id)}}> Unfollow </button> </div>
        }
        
      </div>
      <div>
        <div> {user.fullName} </div>
        <div> {user.status} </div>
      </div>
      <div>
        <div> {user.location.city} </div>
        <div> {user.location.country} </div>
      </div>
    </div>)}
  </div>
}

export default Users;