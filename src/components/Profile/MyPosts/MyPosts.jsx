import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let PostsElement = props.posts.map( p =>  <div> <Post message={p.message} likes={p.likes} /> <hr/> </div> )

  let newPostElement = React.createRef();

  const addNewPost = () => {
    props.addPost();
  }

  const changeTextarea = () => {
    let text = newPostElement.current.value;
    props.changeText(text)
  }


  return (
      <div>
            <div className={m.inp}>
              <textarea onChange={changeTextarea} ref={ newPostElement } value={props.newTextarea}  cols="50" rows="5" />
              
              <button onClick={addNewPost}>Add post</button>
            </div>

            <div className={m.posts}>

            { PostsElement }

            </div>
      </div>
  )
}

export default MyPosts;