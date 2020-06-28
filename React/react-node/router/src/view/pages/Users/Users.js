import React, {useEffect, useState} from "react";
import './Users.css';

import { useParams } from "react-router-dom";

export default function Users(){

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const {userID} = useParams();

    useEffect(()=>{
        fetch(`/api/users/${userID}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setName(data.name)
            setAddress(data.address)
            setPhoneNumber(data.phoneNumber)
            
        })
    },[])

    return(<div className='page users'>
    <h1>User: {name}, {address}, {phoneNumber}</h1>
</div>)
}