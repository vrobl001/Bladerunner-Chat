import React from 'react';
import styles from './RetrieveMessages.module.css';

const RetrieveMessages = props => {
    const allMessages = props.messages.map((message, idx) => (
        <tr key={idx}>
            <td>{message.name}</td>
            <td>{message.msg}</td>
        </tr>
    ));
    return (
        <div className={styles.rmContainer} id='containsMessages'>
            {props.messages.length ? (
                <table className={styles.table}>
                    <tbody>{allMessages}</tbody>
                </table>
            ) : (
                <h4>No Messages Yet!</h4>
            )}
        </div>
    );
};

export default RetrieveMessages;
