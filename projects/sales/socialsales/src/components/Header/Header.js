import React from 'react';
import './Header.scss';

import Logo from '../../img/logo.svg'

const Header = () => {
    return (
        <div className='header'>
        <div className='header__box'>
            <div className='header__logo'>
                <img src={Logo} alt='logo'/>
                <div>Social sales</div>
            </div>
            <div className='header__sub-title'>So Far You Earned</div>
            <div className='header__money'>$$</div>
       </div>
       

       <div className='header__box--small'>
           <div className='header__box--tiny'>
           <div className='header__subtitle--small'>Small Subtitle</div>
            <div className='header__money--small'>Small $$</div>
       </div>
          <div className='header__box--tiny'>
           <div className='header__subtitle--small'>Small Subtitle</div>
           <div className='header__money--small'>Small $$</div>
        </div>


       </div>
       </div>
            


        
            
    )
}
export default Header