import React, { Component } from 'react';
import messageServices from '../../../utils/messageService';
import styles from './RetrieveMessages.module.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

class RetrieveMessages extends Component {
    state = {
        chatTopic: '',
        name: '',
        msg: ''
    };
    async componentDidMount() {
        console.log('retrieve message props ', this.props);
        const retrieveMessages = await messageServices.retrieveMessages();
        console.log('await retrieved messages', retrieveMessages);
        this.props.handleUpdateMessages(retrieveMessages);
        socket.on('sendMessages', data => {
            this.setState({
                chatTopic: data.chatTopic,
                name: data.name,
                msg: data.msg
            });
            console.log('retrieveMessages ', retrieveMessages);
        });
    }

    render() {
        const allMessages = this.props.messages.map((message, idx) => (
            <tr key={idx}>
                <td>{message.name}</td>
                <td>{message.msg}</td>
            </tr>
        ));
        return (
            <div className={styles.rmContainer} id='containsMessages'>
                {this.props.messages.length ? (
                    <table id='test' className={styles.table}>
                        <tbody>
                            {allMessages}
                            <tr>
                                <td>{this.state.name}</td>
                                <td>{this.state.msg}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <h4 className='text-info'>No Messages Yet!</h4>
                )}
            </div>
        );
    }
}

export default RetrieveMessages;
