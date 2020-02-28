import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './Navbar.module.css';

const Navbar = props => {
    const conditionalUI = userService.getUser() ? (
        <>
            <li>
                <Link to='/chatrooms'>Chat Rooms</Link>
            </li>
            <li>
                <Link>Logout</Link>
            </li>
        </>
    ) : (
        <>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='signup'>Signup</Link>
            </li>
        </>
    );
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <h1>Blade Runner Chat</h1>
            </Link>
            <ul></ul>
        </nav>
    );
};

export default Navbar;
