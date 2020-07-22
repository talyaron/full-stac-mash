import React, { useEffect, useState } from 'react';
import './Register.scss'
import { useHistory } from "react-router-dom";

const Register = () => {

    let history = useHistory();

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(e);

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        //only if email and password are not empty proceed;
        if (email !== '' && password !== '') {
            console.log('success')

            fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data=>{
                console.log(data)

                if ('success' in data){
                    history.push('/home')
                    }else{
                        alert('This user credentials already exist! Please login to your existing account.')
                        history.push('/login')
                    }
            })
          
        } 

    }
    return (<div className='registration page'>
        <h1>New user Registration</h1>
        <form onSubmit={handleRegistration} >
            <input type='email' name='email' placeholder='email' />
            <input type='text' name='password' placeholder='password' />
            <input type='submit' value='Register' />
        </form>
    </div >)
}


export default Register;


