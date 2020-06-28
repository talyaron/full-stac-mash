import React from 'react';
import './Register.css';

function Register() {

    return (
        <div>
            <form className='form' onSubmit={submitRegistration}>
                <input type='email' placeholder='email' name='email' />
                <input type='password' placeholder='password' name='pass1' />
                <input type='password' placeholder='re type password' name='pass2' />
                <input type='submit' value='Register' />
            </form>
        </div>
    )

}

export default Register;

function submitRegistration(e) {
    e.preventDefault();
    try {
        let { email, pass1, pass2 } = e.target.elements;
        email = email.value;
        pass1 = pass1.value;
        pass2 = pass2.value;

        console.log(email, pass1, pass2);

        if (pass1 !== pass2) throw 'passwrods does not match';
        if (pass1.length < 7) throw 'password needs to be at least 8 charcters';

        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, pass1, pass2 }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data=>{
            console.log(data)
        })



    } catch (err) {
        alert(err)
        console.error(err)
    }
}





