import * as axios from 'axios';
import React from 'react';
import u from './Users.module.css';


class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsersAC(response.data.items)
      });
    
  }

  render() {
    return <div>
    
    {this.props.users.map(user => <div key={user.id} className={u.wrapper}>
      <div className={u.profile}>
        <div> <img src={user.photos.small || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mzlK7EbmXowwlC53vOrhogHaG1%26pid%3DApi&f=1'} /> </div>
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
    </div>)}
  </div>
  }
}

/*const Users = (props) => {

  let getUsers = () => {
    if(props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsersAC(response.data.items)
      });
    }     
  }      
  
  return <div>
    <div className={u.get}><button onClick={getUsers}>get users</button></div>
    {props.users.map(user => <div key={user.id} className={u.wrapper}>
      <div className={u.profile}>
        <div> <img src={user.photos.small || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mzlK7EbmXowwlC53vOrhogHaG1%26pid%3DApi&f=1'} /> </div>
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
    </div>)}
  </div>
}*/

export default Users;