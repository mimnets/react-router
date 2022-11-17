import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData()
    // console.log(postDetails)
    return (
        <div>
            <h3>About Post Details : {postDetails.title}</h3>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default PostDetails;