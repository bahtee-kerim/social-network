import React from 'react';
import f from './Friends.module.css';

const Friends = (props) => {

  let friendsElement = props.state.map( n => <span> {n.name} </span>)

  return (

    <div className={f.friends}>
            <div>
              <h2>Friends:</h2>
            </div>
          <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7tlP1ph61ompULJdycVJlQHaHa%26pid%3DApi&f=1" alt=""/>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7tlP1ph61ompULJdycVJlQHaHa%26pid%3DApi&f=1" alt=""/>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7tlP1ph61ompULJdycVJlQHaHa%26pid%3DApi&f=1" alt=""/>
          </div>

            {friendsElement} 

    </div>
  )
}

export default Friends;