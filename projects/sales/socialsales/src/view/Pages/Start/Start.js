import React from 'react';
import './Start.scss';

import Logo from '../../../img/logo.svg'

import { useHistory } from "react-router-dom";

const Start = () => {

    const history = useHistory();

    const handleRedirect = () => {
        history.push('/register')
    }

    return (

        <div className='start page'>
            <div className='start-header'>

                <img src={Logo} alt='logo' />
                <h1>Social Sales</h1>
            </div>
            <button className='button' variant="primary" size="lg" onClick={handleRedirect}>Register</button>
        </div>
    )

}
export default Start;

