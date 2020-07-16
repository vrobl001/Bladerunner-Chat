import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChatRooms.module.css';

export default function ChatRooms(props) {
  const allChatRooms = props.chatRooms.map((app, idx) => (
    <li key={idx} onClick={props.handleUpdateChatTopic}>
      <Link
        className={styles.chatRoomWrapper}
        name={app.name}
        data-idx={idx}
        to='/chat'
        onClick={props.handleActiveApp}>
        <div className={styles.chatRooms}>
          <i className='material-icons'>{app.icon}</i>
          <p>{app.name}</p>
        </div>
      </Link>
    </li>
  ));

  return <div className={styles.chatRoomsContainer}>{allChatRooms}</div>;
}
