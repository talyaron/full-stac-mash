import React from 'react';
import './Button.scss';

const Button = (props) => {

    const {text } = props;
    return (
        
            <button className='button'>{text}</button>

        
            
    )
}
export default Button