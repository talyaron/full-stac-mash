import React from 'react';
import './Card.scss';

//import Flyknit from '../../img/flyknit.jpg'

const Card = (props) => {

    const {image, title, price, discount, comission, ttldiscount} = props;

    return (
        <div className='card'>
            <div className='card__image'>
            <img src={image} alt='img' />
            </div>
            <div className='card__info-box'>
                <div className='card__title-box'>
                    <div className='card__title'>
                        <h4>{title}</h4>
                    </div>
                    <div className='card__price'>
                     <h4>{price}</h4>
                    </div>
                </div>
                <div className='card__details-box'>
                    <div className='card__details-line'>
                        <p>{discount}</p>
                    </div>
                    <div className='card__details-line'>
                       <p>{comission}</p>
                    </div>
                    <div className='card__details-line--discount'>
                        <p>{ttldiscount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card