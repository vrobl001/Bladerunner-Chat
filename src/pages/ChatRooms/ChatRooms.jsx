import React from 'react';
import ChatTopics from '../../components/ChatTopics/ChatTopics';
import ReadMessages from '../../components/ReadMessages/ReadMessages';
import WriteMessages from '../../components/WriteMessages/WriteMessages';

import styles from './ChatRooms';

const ChatRooms = props => {
    return (
        <main className={styles.container}>
            <ChatTopics />
            <ReadMessages />
            <WriteMessages />
        </main>
    );
};

export default ChatRooms;
