import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData()
    const navigate = useNavigate()
    const {title, body, userId} = postDetails;
    const handleAuthor = () =>{
        navigate(`/friend/${userId}`)
    }
    // console.log(postDetails)
    return (
        <div>
            <h3>About Post Details : {title}</h3>
            <p>{body}</p>
            <button onClick={handleAuthor}>Show the Author</button>
        </div>
    );
};

export default PostDetails;