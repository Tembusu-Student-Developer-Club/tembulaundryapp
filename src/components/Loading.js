import React from 'react'
import '../css/loading.css'
import Avatar from './Avatar'

const Loading = () => (
  <div className="Loading">
  <Avatar status="spinning" letter=" " color="#fff"></Avatar>
  Loading...
  </div>
  
)

export default Loading