import React from 'react'
import Avatar from 'react-avatar'
import '../css/avatar.css'

const AvatarIcon = (props) => (

  <div className="Avatar">
    <div className="story">
      <Avatar className="alpha" size="70px" color={props.color} name={props.letter} />
      <svg viewBox="0 0 100 100" className={props.status}>
        <circle cx="50" cy="50" r="40"/>
      </svg>
    </div>
  </div>
)

export default AvatarIcon