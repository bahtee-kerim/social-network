import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={p.content}>
      
        <ProfileInfo />
        <MyPosts state={props.state} dispatch={props.dispatch} />

    </div>
  )
}

export default Profile;