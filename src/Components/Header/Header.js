import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between h-[80px] bg-white items-center mx-4 md:mx-20 '>
            <div>
                <h1 className='text-4xl font-bold font-mono'>MINI-DARAZ</h1>
            </div>
            <div className='text-xl font-semibold'>
                <Link className='ml-4' to="home">Home</Link>
                <Link className='ml-4' to="order">Order</Link>
                <Link className='ml-4' to="about">About</Link>
                <Link className='ml-4' to="contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;