import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.css';

const Signup = props => {
    return (
        <main className={styles.signupContainer}>
            <div>
                <SignupForm
                    {...props}
                    handleSignupOrLogin={props.handleSignupOrLogin}
                />
            </div>
        </main>
    );
};

export default Signup;
