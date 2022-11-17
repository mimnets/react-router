import React from 'react';
import { Link } from 'react-router-dom';
 
const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <h2><Link to={`/post/${id}`}>Post: {title}</Link></h2>
        </div>
    );
};

export default Post;