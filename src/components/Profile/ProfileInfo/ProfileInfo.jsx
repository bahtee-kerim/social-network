import React from 'react';
import Preloader from '../../../common/Preloader';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={p.imageWrapper}>
          <img className={p.profileImage} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qXOCgWxJhCSjAOdfdCaNLgHaEK%26pid%3DApi&f=1" />
      </div>
      <div className={p.ava}>
        
      <img src={props.profile.photos.small} />
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.lookingForAJobDescription}</div>

      </div>
    </div>
  )
}

export default ProfileInfo;

