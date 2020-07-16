import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import messageService from './utils/messageService';
import userService from './utils/userService';
import './App.css';

// Reusable Components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

// Page Components
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

// Socket.io
import openSocket from 'socket.io-client';
const socket = openSocket();

export default class App extends Component {
  state = this.initialState;

  get initialState() {
    return {
      messages: [],
      showSidebar: false,
      user: userService.getUser(),
      chatTopic: 'Chat',
      chatRooms: [
        {
          name: 'Chat',
          icon: 'chat',
          active: false,
        },
        {
          name: 'Lessons',
          icon: 'school',
          active: false,
        },
        {
          name: 'Deliverables',
          icon: 'markunread_mailbox',
          active: false,
        },
        {
          name: 'Non-Deliverables',
          icon: 'block',
          active: false,
        },
        {
          name: 'Projects',
          icon: 'folder',
          active: false,
        },
      ],
    };
  }

  handleActiveApp = (e) => {
    let selectedRoom = e.target.dataset.idx;
    this.setState((prevState) => ({
      chatRooms: prevState.chatRooms.map((room, idx) =>
        idx.toString() === selectedRoom ? { ...room, active: !room.active } : { ...room, active: false }
      ),
    }));
  };

  handleGetMessages = async () => {
    if (userService.getUser()) {
      const allMessages = await messageService.retrieveMessages();
      this.setState({ messages: allMessages });
    }
  };

  handleLogout = () => {
    userService.logout();
    this.setState(this.initialState);
  };

  handleShowSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() }, () => {
      this.handleGetMessages();
    });
  };

  handleUpdateChatTopic = (e) => {
    this.setState({
      chatTopic: e.target.name,
    });
  };

  handleUpdateMessages = (message) => {
    const messagesCopy = [...this.state.messages, message];
    this.setState({ messages: messagesCopy });
  };

  componentDidMount() {
    this.handleGetMessages();
    socket.on('sendMessages', (message) => {
      this.handleUpdateMessages(message);
    });
  }

  render() {
    return (
      <div className={'app-outer-container'}>
        <Navbar
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleShowSidebar={this.handleShowSidebar}
          handleActiveApp={this.handleActiveApp}
        />
        <div className='app-inner-container'>
          <div className='sidebar-container'>
            <Sidebar
              handleUpdateChatTopic={this.handleUpdateChatTopic}
              chatRooms={this.state.chatRooms}
              showSidebar={this.state.showSidebar}
              handleActiveApp={this.handleActiveApp}
            />
          </div>
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <Home
                  chatRooms={this.state.chatRooms}
                  handleActiveApp={this.handleActiveApp}
                  handleUpdateChatTopic={this.handleUpdateChatTopic}
                />
              )}
            />
            <Route
              exact
              path='/chat'
              render={() =>
                this.state.user ? (
                  <Chat messages={this.state.messages} user={this.state.user} chatTopic={this.state.chatTopic} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              exact
              path='/login'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/signup'
              render={(props) => <Signup {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
