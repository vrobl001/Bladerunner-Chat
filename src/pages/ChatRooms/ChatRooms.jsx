import React from 'react';
import ChatTopics from '../../components/ChatTopics/ChatTopics';
import ReadMessages from '../../components/ReadMessages/ReadMessages';
import WriteMessages from '../../components/WriteMessages/WriteMessages';

import styles from './ChatRooms.module.css';

const ChatRooms = props => {
    return (
        <div className={styles.crContainer}>
            <ChatTopics />

            <div className={styles.msgrContainer}>
                <ReadMessages />
                <WriteMessages />
            </div>
        </div>
    );
};

export default ChatRooms;
