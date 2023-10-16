import React from 'react'

const PostHeader = (props) => {
  return (
    <div className="post-header">
         {props.children}
    </div>
  )
}

export default PostHeader