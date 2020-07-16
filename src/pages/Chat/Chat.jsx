import React from 'react';
import RetrieveMessages from '../../components/Messenger/RetrieveMessages/RetrieveMessages';
import SendMessages from '../../components/Messenger/SendMessages/SendMessages';
import styles from './Chat.module.css';

export default function Chat(props) {
  return (
    <div className={styles.chatOuterContainer}>
      <h2>{props.chatTopic}</h2>
      <div className={styles.chatInnerContainer}>
        <RetrieveMessages messages={props.messages} user={props.user} chatTopic={props.chatTopic} />
        <SendMessages user={props.user} chatTopic={props.chatTopic} />
      </div>
    </div>
  );
}
