import React from 'react';
import styles from './AllChat.module.css';

const AllChat = props => {
    const allMessages = props.messages.map((message, idx) => (
        <div key={idx}>
            <div className={styles.msgContainer}>
                <p
                    onClick={props.handleUpdateChatTopic}
                    className={styles.chatTopic}
                >
                    {message.chatTopic}
                </p>
                <h5>{message.name}</h5>
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
