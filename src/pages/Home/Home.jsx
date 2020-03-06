import React from 'react';
import logo from '../../logo.svg';
import styles from './Home.module.css';

const Home = props => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeContent}>
                <h1>Chat App Powered By React</h1>

                <img src={logo} className={styles.reactLogo} alt='react logo' />

                <h3>Vincent Robles</h3>
            </div>
        </div>
    );
};

export default Home;
