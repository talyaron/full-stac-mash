import React from 'react';
import './Start.scss';

import { useHistory} from "react-router-dom";

const Start = ()=>{

    const history = useHistory();

    const handleRedirect = ()=>{
        history.push('/register')
    }

    return(
        <div className='start page'>
                <button onClick={handleRedirect}>Start</button>
        </div>
    )
}
export default Start;