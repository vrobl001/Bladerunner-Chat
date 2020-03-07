import React from 'react';
import styles from './AllChat.module.css';

const AllChat = props => {
    const allMessages = props.messages.map((message, idx) => (
        <div key={idx}>
            <div>
                <p className={styles.chatTopic}>{message.chatTopic}</p>
                <p>{message.name}</p>
                <p>{message.msg}</p>
            </div>
        </div>
    ));
    return (
        <div className={styles.ouContainer}>
            <div className={styles.ouInnerContainer}>
                <div>{allMessages}</div>
                <div className={styles.onlineUsers}></div>
            </div>
        </div>
    );
};

export default AllChat;
