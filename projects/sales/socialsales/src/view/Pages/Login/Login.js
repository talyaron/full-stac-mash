import React, { useEffect, useState } from 'react';
import './Login.scss'
import { useHistory } from "react-router-dom";

const Login = () => {

    let history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e);

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        //only if email and password are not empty proceed;
        if (email !== '' && password !== '') {
            console.log('success')

            fetch('/api/login', {
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
                        alert('Username or Password incorrect! Please try again.')
                        history.push('/login')
                    }
            })
          
        } 

    }
    return (<div className='login'>
        <h1>Log-in to your account</h1>
        <form onSubmit={handleLogin} >
            <input type='email' name='email' placeholder='email' />
            <input type='text' name='password' placeholder='password' />
            <input type='submit' value='Login' />
        </form>
    </div >)
}


export default Login;


