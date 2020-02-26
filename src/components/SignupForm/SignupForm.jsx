import React, { Component } from 'react';

class SignupForm extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <legends>Signup Form</legends>
                    <label htmlFor='name'>Full Name</label>
                    <input id='name' name='name' type='text' />

                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' type='email' />

                    <label htmlFor='password'>Password</label>
                    <input id='password' name='password' type='password' />

                    <label htmlFor='passwordConf'>Password Confirmation</label>
                    <input
                        id='passwordConf'
                        name='passwordConf'
                        type='password'
                    />

                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default SignupForm;
