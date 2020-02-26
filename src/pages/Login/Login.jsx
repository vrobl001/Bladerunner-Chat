import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

const Login = props => {
    return (
        <main>
            <h1>Login</h1>
            <LoginForm />
        </main>
    );
};

export default Login;
