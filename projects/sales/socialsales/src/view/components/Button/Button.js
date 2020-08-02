import React from 'react';
import './Button.scss';


    const Button = (props) => {
    
        const {text, index, move, setMove } = props;
    
        function moveProd(e) {  
            e.preventDefault();
            
            if (move[index] == "regular") {
                setMove(move.map((x,i) => { return ((i == index) ? 'currentsale' : x) }))   // lifting state up
            } else {
                setMove(move.map((x,i) => { return ((i == index) ? 'regular' : x) }))
            }
        }
    
        return (
                <button className='button'  onClick={(e) => {moveProd(e)}} > {text}</button>
        )
    }
    

export default Button;