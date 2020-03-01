import React, { Component } from 'react';
import messageServices from '../../../utils/messageService';
import styles from './RetrieveMessages.module.css';
import ChatTopics from '../ChatTopics/ChatTopics';

class RetrieveMessages extends Component {
    state = {
        messages: []
    };

    handleUpdateMessages = messages => {
        this.setState({ messages });
    };

    async componentDidMount() {
        const retrieveMessages = await messageServices.retrieveMessages();
        this.handleUpdateMessages(retrieveMessages);
    }
    render() {
        const allMessages = this.state.messages.map((message, idx) => (
            <tr key={idx}>
                <td>
                    <span>{idx + 1}</span>
                </td>
                <td>{message.msg}</td>
            </tr>
        ));
        return (
            <div className={styles.rmContainer}>
                {this.state.messages.length ? (
                    <table className={styles.table}>
                        <tbody>{allMessages}</tbody>
                    </table>
                ) : (
                    <h4 className='text-info'>Messages Yet</h4>
                )}
            </div>
        );
    }
}

export default RetrieveMessages;
