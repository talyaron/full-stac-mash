import React from 'react';
import './Currentsale.scss';

import Facebook from '../../img/Facebook.svg'
import Insta from '../../img/Insta.svg'
import Snapchat from '../../img/Snapchat.svg'
import Whatsapp from '../../img/Whatsapp.svg'


const Cardtwo = (props) => {

    const {image, title, earned, purchases } = props;

    return (
        <div className='cardtwo'>
            <div className='cardtwo__image'>
            <img src={image} alt='img' />
            </div>
            <div className='cardtwo__info-box'>
                <div className='cardtwo__title-box'>
                    <div className='cardtwo__title'>
                        {title}
                    </div>
                </div>
                <div className='cardtwo__details-box'>
                    <div className='cardtwo__details-line'>
                        {earned}
                    </div>
                    <div className='cardtwo__details-line'>
                       {purchases}
                    </div>
                    
                </div>
                
            </div>
            <div className='cardtwo__social-media'>
               <div className='cardtwo__social-media--facebook'>
               <img src={Facebook} alt='facebook' /></div>

               <div className='cardtwo__social-media--insta'>
               <img src={Insta} alt='insta' /></div>

               <div className='cardtwo__social-media--snapchat'>
               <img src={Snapchat} alt='snapchat' /></div>

               <div className='cardtwo__social-media--whatsapp'>
               <img src={Whatsapp} alt='whatsapp' /></div>
            </div>
           
           
        </div>
        
    )
}
export default Cardtwo;