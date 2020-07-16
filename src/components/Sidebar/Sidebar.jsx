import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import './Sidebar.module.css';

export default function Sidebar(props) {
  const sidebarApps = props.chatRooms.map((app, idx) =>
    app.active === true ? (
      <li key={idx} onClick={props.handleUpdateChatTopic}>
        <Link className={styles.active} name={app.name} data-idx={idx} to='/chat' onClick={props.handleActiveApp}>
          <i className='material-icons'>{app.icon}</i>
          {app.name}
        </Link>
      </li>
    ) : (
      <li key={idx} onClick={props.handleUpdateChatTopic}>
        <Link name={app.name} data-idx={idx} to='/chat' onClick={props.handleActiveApp}>
          <i className='material-icons'>{app.icon}</i>
          {app.name}
        </Link>
      </li>
    )
  );
  return (
    props.showSidebar === true && (
      <nav className={styles.sidebarContainer}>
        <ul>{sidebarApps}</ul>
      </nav>
    )
  );
}
