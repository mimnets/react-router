import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetails = () => {
    const friendDetails = useLoaderData()
    console.log(friendDetails);
    return (
        <div>
            <h1>Details About: {friendDetails.name}</h1>
            <h1>User Name: {friendDetails.username}</h1>
            <h1>Email: {friendDetails.emial}</h1>
            <h1>Phone: {friendDetails.phone}</h1>
        </div>
    );
};

export default FriendDetails;