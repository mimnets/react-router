import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Side from './Side';
import ('./Main.css');

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;