import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, username, email} = friend;
    return (
        <div>
            <h3>Name {name}</h3>
            <h3>Email {email}</h3>
            <h3>UserName: <Link to={`/freind${id}`}>{username}</Link></h3>
        </div>
    );
};

export default Friend;