import React from 'react';
import styles from './Navbar.module.css';

const Navbar = props => {
    return (
        <nav>
            <h1>Blade Runner Chat</h1>
            <ul>
                <li>Chat Rooms</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    );
};

export default Navbar;
