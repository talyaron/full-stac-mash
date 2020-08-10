import React from 'react';
import './Register.css'

const Register = (props) => {
    const {setUser} = props;
  
    return (
        <div>
            <h1>Twitter</h1>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='password' placeholder='Password' />
                <input type='text' name='img' placeholder='Image' />
                <input type='submit' name='submit' value='Register' />
            </form>
        </div>
    )

    function handleRegister(e){
        e.preventDefault();
    
        let {name, password, img} = e.target.elements;
        name = name.value;
        password = password.value;
        img = img.value;
        
    
        fetch('/api/register',{
            method:'POST',
            body: JSON.stringify({ name, password, img}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            
            const{user} = data
    
           
            //store user in app store (store is the state of the app)
            setUser(user)
        })
        
    }
}

export default Register;

