import React, { Component } from 'react';
import messageService from '../../../utils/messageService';
import styles from './SendMessages.module.css';
import Paper from '@material-ui/core/Paper';
import io from 'socket.io-client';
let socket;

class SendMessages extends Component {
    state = this.getInitialState();
    getInitialState() {
        return {
            name: this.props.user.name,
            msg: ''
        };
    }

    handleSocket() {
        if (!socket) {
            socket = io(':8080');
        }
    }

    componentDidMount() {
        this.handleSocket();
        socket.on('sendMessages', data => {
            console.log(data);
        });
    }

    isMessageValid = () => {
        return this.state.name && this.state.msg;
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
            const { name, msg } = this.state;
            const chatTopic = this.props.chatTopic;
            socket.emit('sendMessages', { name, msg, chatTopic });
            await messageService.sendMessages({ chatTopic, name, msg });
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
            <Paper className={styles.wrContainer} elevation={10}>
                <form onSubmit={this.handleSubmit}>
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
