import React from 'react';
import './Card.scss';

//import Flyknit from '../../img/flyknit.jpg'

const Card = (props) => {

    //const {image, title, price, discount, comission, ttldiscount} = props;
    const { card } = props;

    return (
        
            <div className='card'>
                <div className='card__image'>
                    <img src={card.image} alt='img' />
                </div>
                <div className='card__info-box'>
                    <div className='card__title-box'>
                        <div className='card__title'>
                            <h4>{card.title}</h4>
                        </div>
                        <div className='card__price'>
                            <h4>{card.price}</h4>
                        </div>
                    </div>
                    <div className='card__details-box'>
                        <div className='card__details-line'>
                            <p>{card.discount}</p>
                        </div>
                        <div className='card__details-line'>
                            <p>{card.comission}</p>
                        </div>
                        <div className='card__details-line--discount'>
                            <p>{card.ttldiscount}</p>
                        </div>
                    </div>
                </div>
            </div>
       

    )
}
export default Card