import React from 'react';
import ChatTopics from '../../components/Messenger/ChatTopics/ChatTopics';
import ReadMessages from '../../components/Messenger/ReadMessages/ReadMessages';
import WriteMessages from '../../components/Messenger/WriteMessages/WriteMessages';
import OnlineUsers from '../../components/Messenger/OnlineUsers/OnlineUsers';

import styles from './ChatRooms.module.css';

const ChatRooms = props => {
    return (
        <div className={styles.crContainer}>
            <ChatTopics />

            <div className={styles.msgrContainer}>
                <ReadMessages />
                <WriteMessages />
            </div>
            <OnlineUsers />
        </div>
    );
};

export default ChatRooms;
