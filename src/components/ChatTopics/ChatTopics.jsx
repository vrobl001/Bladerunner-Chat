import React from 'react';
import styles from './ChatTopics.module.css';

const ChatTopics = props => {
    return (
        <div className={styles.chatNav}>
            <ul>
                <li>General</li>
                <li>Lessons</li>
                <li>Deliverables</li>
                <li>Non-Deliverables</li>
                <li>Projects</li>
            </ul>
        </div>
    );
};

export default ChatTopics;
