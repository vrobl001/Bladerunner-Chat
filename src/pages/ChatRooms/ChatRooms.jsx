import React from 'react';
import ChatTopics from '../../components/Messenger/ChatTopics/ChatTopics';
import RetrieveMessages from '../../components/Messenger/RetrieveMessages/RetrieveMessages';
import SendMessages from '../../components/Messenger/SendMessages/SendMessages';
import OnlineUsers from '../../components/Messenger/OnlineUsers/OnlineUsers';
import styles from './ChatRooms.module.css';
import Paper from '@material-ui/core/Paper';

const ChatRooms = props => {
    return (
        <div className={styles.crContainer}>
            <ChatTopics {...props} />

            <div className={styles.msgrContainer}>
                <Paper elevation={3}>
                    <RetrieveMessages {...props} />
                    <SendMessages {...props} />
                </Paper>
            </div>

            <OnlineUsers {...props} />
        </div>
    );
};

export default ChatRooms;
