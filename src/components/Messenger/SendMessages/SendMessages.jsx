import React, { Component } from 'react';
import messageService from '../../../utils/messageService';
import styles from './SendMessages.module.css';
import openSocket from 'socket.io-client';
import Paper from '@material-ui/core/Paper';
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
            socket.emit('sendMessages', this.state);
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
            <Paper elevation={10}>
                <form
                    className={styles.wrContainer}
                    onSubmit={this.handleSubmit}
                >
                    <input
                        id='msg'
                        name='msg'
                        type='text'
                        value={this.state.msg}
                        onChange={this.handleChange}
                    />
                </form>
            </Paper>
        );
    }
}

export default SendMessages;
