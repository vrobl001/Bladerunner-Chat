import React from 'react';
import styles from './RetrieveMessages.module.css';

const RetrieveMessages = props => {
    const filteredMessages = props.messages.filter(message => {
        return message.chatTopic === props.chatTopic;
    });
    const mappedFilteredMessages = filteredMessages.map((message, idx) => (
        <tr key={idx}>
            <td>{message.chatTopic}</td>
            <td>{message.name}</td>
            <td>{message.msg}</td>
        </tr>
    ));
    return (
        <div className={styles.rmContainer}>
            {filteredMessages.length ? (
                <table className={styles.table}>
                    <tbody>{mappedFilteredMessages}</tbody>
                </table>
            ) : (
                <h1>No Messages Yet!</h1>
            )}
        </div>
    );
};

export default RetrieveMessages;
