import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let PostsElement = props.state.map( p =>  <div> <Post message={p.message} likes={p.likes} /> <hr/> </div> )

  let newPostElement = React.createRef();

  const addNewPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }


  return (
      <div>
            <div className={m.inp}>
              <textarea ref={ newPostElement }  cols="50" rows="5"></textarea>
              
              <button onClick={addNewPost}>Add post</button>
            </div>

            <div className={m.posts}>

            { PostsElement }

            </div>
      </div>
  )
}

export default MyPosts;