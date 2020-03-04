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
const socket = openSocket('http://localhost:4000');

class App extends Component {
    state = this.getInitialState();

    getInitialState() {
        return {
            user: userService.getUser(),
            messages: []
        };
    }

    async componentDidMount() {
        const allMessages = await messageService.retrieveMessages();
        this.handleUpdateMessages(allMessages);
        socket.on('sendMessages', data => {
            console.log('app socket', data);
            this.handleUpdateMessages(data);
        });
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    };

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    };

    handleUpdateMessages = messages => {
        this.setState({ messages });
    };

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
