import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={p.imageWrapper}>
          <img className={p.profileImage} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qXOCgWxJhCSjAOdfdCaNLgHaEK%26pid%3DApi&f=1" />
      </div>
      <div className={p.ava}>
        <img src={props.profile.photos.small} />
        <div>{props.profile.contacts.github}</div>
      </div>
    </div>
  )
}

export default ProfileInfo;
