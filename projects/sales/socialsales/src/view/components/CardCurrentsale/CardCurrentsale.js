import React from 'react';
import './CardCurrentsale.scss';

import Facebook from '../../../img/Facebook.svg'
import Insta from '../../../img/Insta.svg'
import Snapchat from '../../../img/Snapchat.svg'
import Whatsapp from '../../../img/Whatsapp.svg'


const CardCurrentSale = (props) => {

    //const { image, title, earned, purchases } = props;
    const {card} = props;

    return (
        <div className='card-current-sale'>
            <div className='card-current-sale__top'>
                <div className='card-current-sale__image'>
                    <img src={card.image} alt='img' />
                </div>

                <div className='card-current-sale__info-box'>
                    <div className='card-current-sale__title-box'>
                        <div className='card-current-sale__title'>
                            {card.title}
                        </div>
                    </div>
                    <div className='card-current-sale__details-box'>
                        <div className='card-current-sale__details-line'>
                            {card.earned}
                        </div>
                        <div className='card-current-sale__details-line'>
                            {card.purchased}
                        </div>
                    </div>
                </div>

            </div>

            <div className='card-current-sale__social-media'>
                <div className='card-current-sale__social-media__icon'>
                    <img src={Facebook} alt='facebook' /></div>

                <div className='card-current-sale__social-media__icon'>
                    <img src={Insta} alt='insta' /></div>

                <div className='card-current-sale__social-media__icon'>
                    <img src={Snapchat} alt='snapchat' /></div>

                <div className='card-current-sale__social-media__icon'>
                    <img src={Whatsapp} alt='whatsapp' /></div>
            </div>

        </div>

    )
}
export default CardCurrentSale;