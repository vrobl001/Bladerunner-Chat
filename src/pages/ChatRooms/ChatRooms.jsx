import React from 'react';
import ChatTopics from '../../components/ChatTopics/ChatTopics';
import ReadMessages from '../../components/ReadMessages/ReadMessages';
import WriteMessages from '../../components/WriteMessages/WriteMessages';

import styles from './ChatRooms';

const ChatRooms = props => {
    return (
        <>
            <div className={styles.container}>
                <ChatTopics />
                <ReadMessages />
                <WriteMessages />
            </div>
        </>
    );
};

export default ChatRooms;
