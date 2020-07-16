import React from 'react';
import ChatRooms from '../../components/ChatRooms/ChatRooms';
import styles from './Home.module.css';

export default function Home(props) {
  return (
    <div className={styles.homeContainer}>
      <ChatRooms {...props} />
    </div>
  );
}
