import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './OnlineUsers.module.css';

const OnlineUsers = props => {
    return (
        <div className={styles.ouContainer}>
            <Paper elevation={10} className={styles.ouInnerContainer}>
                <ul>
                    <li>{props.user.name}</li>
                    <li>brian</li>
                    <li>crystal</li>
                    <li>lina</li>
                    <li>noor</li>
                </ul>
            </Paper>
        </div>
    );
};

export default OnlineUsers;
