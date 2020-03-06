import React from 'react';
import styles from './RetrieveMessages.module.css';

const RetrieveMessages = props => {
    const filteredMessages = props.messages.filter(message => {
        return message.chatTopic === props.chatTopic;
    });
    const mappedFilteredMessages = filteredMessages.map((message, idx) => (
        <div key={idx}>
            <div className={styles.displayedMessages}>
                <div>
                    <p className={styles.rmChatTopic}>{message.chatTopic}</p>
                </div>
                <div className={styles.test}>
                    <p className={styles.rmUser}>{message.name}</p>
                    <p className={styles.rmMessage}>{message.msg}</p>
                </div>
            </div>
        </div>
    ));
    return (
        <div className={styles.rmContainer}>
            {filteredMessages.length ? (
                <div>
                    <div>{mappedFilteredMessages}</div>
                </div>
            ) : (
                <h1>No Messages Yet!</h1>
            )}
        </div>
    );
};

export default RetrieveMessages;
