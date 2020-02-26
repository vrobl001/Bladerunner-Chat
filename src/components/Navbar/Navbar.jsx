import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = props => {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <h1>Blade Runner Chat</h1>
            </Link>
            <ul>
                <li>
                    <Link to='/chatrooms'>Chat Rooms</Link>
                </li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    );
};

export default Navbar;
