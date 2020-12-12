import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let PostsElement = props.state.map( p =>  <div> <Post message={p.message} likes={p.likes} /> <hr/> </div> )


  return (
      <div>
            <div className={m.inp}>
              <textarea name="" id="" cols="70" rows="5"></textarea>
              <button>Add post</button>
            </div>

            <div className={m.posts}>

            { PostsElement }

            </div>
      </div>
  )
}

export default MyPosts;