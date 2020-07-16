import React from 'react';
import styles from './Footer.module.css';

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright &copy; <span>Bladerunner Chat</span> {new Date().getFullYear()}
      </p>
    </footer>
  );
}
