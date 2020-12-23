import React from 'react';
import {changeTextareaTextActionCreator, addPostActionCreator} from './../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let posts = props.store.getState().profilePage.posts;
  let newTextarea = props.store.getState().profilePage.newTextarea;



  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const changeText = (text) => {
    let action = changeTextareaTextActionCreator(text);
    props.store.dispatch(action);
  }


  return (
      <MyPosts addPost={addPost} changeText={changeText} posts={posts} newTextarea={newTextarea} />
  )
}

export default MyPostsContainer;