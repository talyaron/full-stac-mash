import React from 'react';
import './Button.scss';


    const Button = (props) => {
    
        const {text, userId, index, cards, setCards, otherCards, setOtherCards } = props;
        const card = cards[index];
    
        function moveProd(e) {  
            e.preventDefault();
            
            setOtherCards([...otherCards,card]);
            setCards( cards.filter( (x,i) => (i != index) ) )   // lifting state up 
            
            fetch(`/api/put-user-info/${userId}`, {  // update in DB
                method: 'PUT',
                body: JSON.stringify({ card }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data=>{
                console.log(data)
            })
        }
    
        return (
                <button className='button'  onClick={(e) => {moveProd(e)}} > {text}</button>
        )
    }
    
export default Button;