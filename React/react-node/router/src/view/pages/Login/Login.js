import React from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';

function Login() {

    const history = useHistory();

    function handleRedirect() {
        history.push('/')
    }

    return (
        <div className='page login'>
            <h1>Login</h1>


            <form className='login form' onSubmit={(e)=>submitLogin(e,handleRedirect)} >
                <input type='email' placeholder='email' name='email' />
                <input type='password' placeholder='password' name='password' />
                <input type='submit' value='Login' />
            </form>
        </div>

    )

}

export default Login;



function submitLogin(e,handleRedirect) {
    e.preventDefault();
    try {
        let { email, password } = e.target.elements;
        email = email.value;
        password = password.value;


        console.log(email, password);


        if (password.length < 7) throw 'password does not match';

        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if('success' in data) handleRedirect();
            })




    } catch (err) {
        alert(err)
        console.error(err)
    }

    e.target.elements.email.value = '';
    e.target.elements.password.value = ''

}


