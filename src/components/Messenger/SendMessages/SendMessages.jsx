import React, { Component } from 'react';
import messageService from '../../../utils/messageService';
import styles from './SendMessages.module.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

class SendMessages extends Component {
    state = this.getInitialState();
    getInitialState() {
        return {
            chatTopic: 'New Test Topic',
            name: 'Vincent',
            msg: ''
        };
    }

    sendSocketIO(messages) {
        socket.emit('sendMessages', messages);
    }

    isMessageValid = () => {
        return this.state.chatTopic && this.state.name && this.state.msg;
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        if (!this.isMessageValid()) return;
        try {
            const { chatTopic, name, msg } = this.state;
            await messageService.sendMessages({ chatTopic, name, msg });
            const retrieveMessages = await messageService.retrieveMessages();
            this.sendSocketIO(retrieveMessages);
            this.setState(this.getInitialState());
        } catch (error) {
            this.setState({
                chatTopic: 'Test Topic',
                name: 'Vincent',
                msg: ''
            });
        }
    };

    render() {
        return (
            <div className={styles.wrContainer}>
                <h1>Here's where we write messages</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='msg'>Message</label>
                    <input
                        id='msg'
                        name='msg'
                        type='text'
                        value={this.state.msg}
                        onChange={this.handleChange}
                    />
                    <button disabled={!this.isMessageValid()} type='submit'>
                        Send Message
                    </button>
                </form>
            </div>
        );
    }
}

export default SendMessages;
