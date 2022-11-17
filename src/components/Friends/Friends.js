import React from 'react';
import { useLoaderData } from 'react-router';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;