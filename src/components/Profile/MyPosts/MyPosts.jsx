import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';
import {changeTextareaTextActionCreator, addPostActionCreator} from './../../../redux/state';

const MyPosts = (props) => {

  let PostsElement = props.state.profilePage.posts.map( p =>  <div> <Post message={p.message} likes={p.likes} /> <hr/> </div> )

  let newPostElement = React.createRef();

  const addNewPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const changeTextarea = () => {
    let text = newPostElement.current.value;
    let action = changeTextareaTextActionCreator(text);
    props.dispatch(action);
  }


  return (
      <div>
            <div className={m.inp}>
              <textarea onChange={changeTextarea} ref={ newPostElement } value={props.state.profilePage.newTextarea}  cols="50" rows="5" />
              
              <button onClick={addNewPost}>Add post</button>
            </div>

            <div className={m.posts}>

            { PostsElement }

            </div>
      </div>
  )
}

export default MyPosts;