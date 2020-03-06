import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './RetrieveMessages.module.css';

const RetrieveMessages = props => {
    const filteredMessages = props.messages.filter(message => {
        return message.chatTopic === props.chatTopic;
    });
    const mappedFilteredMessages = filteredMessages.map((message, idx) => (
        <tr key={idx}>
            <Paper className={styles.displayedMessages}>
                <div>
                    <td className={styles.rmChatTopic}>{message.chatTopic}</td>
                </div>
                <td className={styles.rmUser}>{message.name}</td>
                <td className={styles.rmMessage}>{message.msg}</td>
            </Paper>
        </tr>
    ));
    return (
        <div className={styles.rmContainer}>
            {filteredMessages.length ? (
                <table>
                    <tbody>{mappedFilteredMessages}</tbody>
                </table>
            ) : (
                <h1>No Messages Yet!</h1>
            )}
        </div>
    );
};

export default RetrieveMessages;
