import React from 'react'; 

const Post = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Post;