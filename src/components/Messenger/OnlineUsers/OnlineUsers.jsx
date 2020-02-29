import React from 'react';
import styles from './OnlineUsers.module.css';

const OnlineUsers = props => {
    return (
        <div className={styles.ouContainer}>
            <ul>
                <li>ted</li>
                <li>brian</li>
                <li>crystal</li>
                <li>lina</li>
                <li>noor</li>
            </ul>
        </div>
    );
};

export default OnlineUsers;
