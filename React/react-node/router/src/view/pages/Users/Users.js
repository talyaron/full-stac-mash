import React, { useEffect, useState } from "react";
import './Users.css';

import { useParams } from "react-router-dom";

export default function Users() {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [someText, setSomeText] = useState('');
    const { userID } = useParams();

    useEffect(() => {
        fetch(`/api/users/${userID}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setName(data.name)
                setAddress(data.address)
                setPhoneNumber(data.phoneNumber)

            })
    }, [])

    return (
        <div className='page users'>
            <h1>User: {name}, {address}, {phoneNumber}</h1>
            <input type='text' placeholder='hi' onKeyUp={e => setSomeText(e.target.value)} />
            <div>{someText}</div>
            <form onSubmit={sendForm}>
                <input type='text' placeholder='hi' name='a' />
                <input type='text' placeholder='hi' name='b' />
                <input type='text' placeholder='hi' name='c' />
                <input type='submit' value='Send Form' />
            </form>
        </div>
    )


}

function sendForm(e) {
    e.preventDefault();

    const { a, b, c } = e.target.elements;
    console.log(a.value, b.value, c.value)


    fetch('/api/send-form', {
        method: 'POST',
        body: JSON.stringify({ a: a.value, b: b.value, c: c.value }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}