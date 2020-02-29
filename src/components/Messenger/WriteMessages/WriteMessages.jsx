import React, { Component } from 'react';
import messageService from '../../../utils/messageService';
import styles from './WriteMessages.module.css';

class WriteMessages extends Component {
    state = this.getInitialState();
    getInitialState() {
        return {
            chatTopic: 'Test Topic',
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
            await messageService.sendChat({ chatTopic, name, msg });
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

export default WriteMessages;
