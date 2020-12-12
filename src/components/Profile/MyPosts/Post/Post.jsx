import React from 'react';
import m from './Post.module.css';

const Post = (props) => {
  return (
          <div className={m.item}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tHluP4chQzW31oRhD-mqogHaHa%26pid%3DApi&f=1" alt="avatar"/>

          {props.message}

            <div className={m.like}>
            likes: {props.likes}
            </div>
          </div>
      
  )
}

export default Post;