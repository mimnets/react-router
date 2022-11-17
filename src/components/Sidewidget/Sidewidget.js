import React from 'react';
import { Link } from 'react-router-dom';

const Sidewidget = () => {
    return (
        <div className='side-widget'>
            <Link to='/portfolio'>Portfolio</Link>
        </div>
    );
};

export default Sidewidget;