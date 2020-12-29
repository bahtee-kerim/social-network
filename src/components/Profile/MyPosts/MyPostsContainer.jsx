import React from 'react';
import { connect } from 'react-redux';
import {changeTextareaTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newTextarea: state.profilePage.newTextarea
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    
    changeText: (text) => {
      let action = changeTextareaTextActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;