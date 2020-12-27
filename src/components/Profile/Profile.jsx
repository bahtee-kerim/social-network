import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={p.content}>
      
        <ProfileInfo />
        <MyPostsContainer />

    </div>
  )
}

export default Profile;