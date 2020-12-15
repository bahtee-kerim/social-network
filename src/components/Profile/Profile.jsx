import React from 'react';
import { addPost, changeTextareaText } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={p.content}>
      
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newTextarea={props.profilePage.newTextarea} changeTextareaText={props.changeTextareaText} />

    </div>
  )
}

export default Profile;