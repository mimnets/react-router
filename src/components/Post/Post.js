import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
 
const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate()
    const handlePost = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h2><Link to={`/post/${id}`}>Post: {title}</Link></h2>
            <button onClick={handlePost}>Show Post</button>
        </div>
    );
};

export default Post;