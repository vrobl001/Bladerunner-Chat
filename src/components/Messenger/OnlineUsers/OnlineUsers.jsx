import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './OnlineUsers.module.css';

const OnlineUsers = props => {
    const allUsers = props.online.map((user, idx) => (
        <li key={idx}>{user.name}</li>
    ));
    return (
        <div className={styles.ouContainer}>
            <Paper elevation={10} className={styles.ouInnerContainer}>
                <ul>{allUsers}</ul>
            </Paper>
        </div>
    );
};

export default OnlineUsers;
