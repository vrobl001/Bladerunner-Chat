import React from 'react';
import styles from './OnlineUsers.module.css';

const OnlineUsers = props => {
    const allUsers = props.online.map((user, idx) => (
        <li key={idx}>{user.name}</li>
    ));
    return (
        <div className={styles.ouContainer}>
            <div className={styles.ouInnerContainer}>
                <div className={styles.onlineUsers}>
                    <h1>Online Users</h1>
                </div>
                <div>
                    <ul>{allUsers}</ul>
                </div>
            </div>
        </div>
    );
};

export default OnlineUsers;
