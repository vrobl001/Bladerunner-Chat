import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import messageService from './utils/messageService';

// Reusable components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Page components
import Home from './pages/Home/Home';
import ChatRooms from './pages/ChatRooms/ChatRooms';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import './App.css';
import userService from './utils/userService';

import openSocket from 'socket.io-client';
const socket = openSocket('https://blade-runner-chat.herokuapp.com/chatrooms');

class App extends Component {
    state = {
        user: userService.getUser(),
        chatTopic: 'All Chat',
        messages: [],
        filteredMessages: [],
        online: []
    };

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() }, () => {
            this.handleGetMessages();
            socket.emit('onlineUser', this.state.user.name);
        });
    };

    handleLogout = () => {
        this.handleOfflineUser();
        userService.logout();
        this.setState({
            user: userService.getUser(),
            chatTopic: '',
            messages: [],
            filteredMessages: []
        });
    };

    handleOnlineUser = () => {
        const onlineUser = this.state.user;
        const onlineUserUpdate = [...this.state.online, onlineUser];
        this.setState({ online: onlineUserUpdate });
    };

    handleOfflineUser = () => {
        const usersStillOn = this.state.online.filter(name => {
            return name.name !== userService.getUser().name;
        });
        this.setState({ online: usersStillOn });
        socket.emit('offlineUser', usersStillOn);
    };

    handleGetMessages = async () => {
        if (userService.getUser()) {
            const allMessages = await messageService.retrieveMessages();
            this.setState({ messages: allMessages });
        }
    };

    handleUpdateChatTopic = selectedTopic => {
        this.setState({
            chatTopic: selectedTopic.target.innerText
        });
    };

    handleUpdateMessages = message => {
        const messagesCopy = [...this.state.messages, message];
        this.setState({ messages: messagesCopy });
    };

    handleLoadMessages = messages => {
        this.setState({ messages });
    };

    componentDidMount() {
        this.handleGetMessages();

        socket.on('sendMessages', message => {
            this.handleUpdateMessages(message);
        });

        if (this.state.user) {
            socket.emit('onlineUser', this.state.user);
        }

        socket.on('onlineUser', user => {
            this.handleOnlineUser(user);
        });
    }

    componentWillUnmount() {
        this.handleLogout();
    }

    render() {
        return (
            <div className='App-outer-container'>
                <Navbar handleLogout={this.handleLogout} />
                <div className='App-inner-container'>
                    <Switch>
                        <Route exact path='/' render={props => <Home />} />

                        <Route
                            exact
                            path='/chatrooms'
                            render={props =>
                                this.state.user ? (
                                    <ChatRooms
                                        filteredMessages={
                                            this.state.filteredMessages
                                        }
                                        chatTopic={this.state.chatTopic}
                                        handleUpdateChatTopic={
                                            this.handleUpdateChatTopic
                                        }
                                        online={this.state.online}
                                        user={this.state.user}
                                        messages={this.state.messages}
                                        handleUpdateMessages={
                                            this.handleUpdateMessages
                                        }
                                    />
                                ) : (
                                    <Redirect to='/login' />
                                )
                            }
                        />

                        <Route
                            exact
                            path='/login'
                            render={props => (
                                <Login
                                    {...props}
                                    handleGetMessages={this.handleGetMessages}
                                    handleSignupOrLogin={
                                        this.handleSignupOrLogin
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path='/signup'
                            render={props => (
                                <Signup
                                    {...props}
                                    handleSignupOrLogin={
                                        this.handleSignupOrLogin
                                    }
                                />
                            )}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
