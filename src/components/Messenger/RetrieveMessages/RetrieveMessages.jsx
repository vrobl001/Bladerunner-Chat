import React, { Component } from 'react';
import messageServices from '../../../utils/messageService';
import styles from './RetrieveMessages.module.css';

class RetrieveMessages extends Component {
    async componentDidMount() {
        const retrieveMessages = await messageServices.retrieveMessages();
        this.props.handleUpdateMessages(retrieveMessages);
    }
    render() {
        const allMessages = this.props.messages.map((message, idx) => (
            <tr key={idx}>
                <td>{message.name}</td>
                <td>{message.msg}</td>
            </tr>
        ));
        return (
            <div className={styles.rmContainer}>
                {this.props.messages.length ? (
                    <table className={styles.table}>
                        <tbody>{allMessages}</tbody>
                    </table>
                ) : (
                    <h4 className='text-info'>No Messages Yet!</h4>
                )}
            </div>
        );
    }
}

export default RetrieveMessages;
