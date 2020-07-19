import React from 'react';
import './Register.scss'

const Register = () => {

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(e);

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        //only if email and password are not empty proceed;
        if (email !== '' && password !== '') {
            console.log('success')
        } 

    }
    return (<div>
        <form onSubmit={handleRegistration} >
            <input type='email' name='email' placeholder='email' />
            <input type='text' name='password' placeholder='password' />
            <input type='submit' value='Register' />
        </form>
    </div >)
}

export default Register;