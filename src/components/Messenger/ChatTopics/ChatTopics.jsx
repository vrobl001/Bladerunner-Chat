import React from 'react';
import styles from './ChatTopics.module.css';

const ChatTopics = props => {
    return (
        <div className={styles.chatNav}>
            <ul>
                <li onClick={props.handleUpdateChatTopic}>Main</li>
                <li onClick={props.handleUpdateChatTopic}>Lessons</li>
                <li onClick={props.handleUpdateChatTopic}>Deliverables</li>
                <li onClick={props.handleUpdateChatTopic}>Non-Deliverables</li>
                <li onClick={props.handleUpdateChatTopic}>Projects</li>
            </ul>
        </div>
    );
};

export default ChatTopics;
