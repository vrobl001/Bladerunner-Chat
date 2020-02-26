import React, { Component } from 'react';

class SignupForm extends Component {
    render() {
        return (
            <form>
                <input type='text' />
                <input type='email' />
                <input type='password' />
                <input type='password' />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default SignupForm;
