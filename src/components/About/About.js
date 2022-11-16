import React, { memo } from 'react';
import Header from '../Header/Header';

const About = memo(() => {
    return (
        <div>
            <Header></Header>
            <h1>This is about page</h1>
        </div>
    );
});

export default About;