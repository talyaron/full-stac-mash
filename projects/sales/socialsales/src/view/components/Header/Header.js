import React, {useState, useEffect}  from 'react';
import './Header.scss';

import Logo from '../../../img/logo.svg'

const Header = (props) => {

    const { id } = props;

    const [totalSum, setTotalSum] = useState(0);
    const [lastMonthSum, setLastMonthSum] = useState(0);

    let cardsCurrentSales=[];
    let cardsHotSales=[];

    useEffect(() => {
        fetch(`/api/get-user-info/${id}`)
        .then(res => res.json())
        .then(async (data) => {
            console.log(data)
            //setUserInfo(data);
            let index1 = -1;
            let index2 = -1;
            let allCardsArr =[];

            await fetch(`/api/get-user-cards/${id}`)
                .then(res => res.json())
                .then(cards => {
                    console.log(cards)
                    if (cards.success) {
                        cardsCurrentSales = [...cards.cardsCurrentSales];
                        cardsHotSales = [...cards.cardsHotSales];
                    }
                })
      
            for(let i=0; i<data.cards.length; i++) {
                index1 = cardsCurrentSales.findIndex((x) => data.cards[i].id == x._id)
                index2 = cardsHotSales.findIndex((x) => data.cards[i].id == x._id)
                if (index1 != -1) {
                    allCardsArr.push({ id: data.cards[i].id, date: data.cards[i].date, price: cardsCurrentSales[index1].price})
                }
                if (index2 != -1) {
                    allCardsArr.push({ id: data.cards[i].id, date: data.cards[i].date, price: cardsHotSales[index2].price})
                }
            }
            console.log(allCardsArr);
            let prices = allCardsArr.map(x => parseInt(x.price.substr(1)));
            console.log(prices)
            let totSum = (prices.length > 0)?  prices.reduce((total, amount) => total + amount) : 0;
            setTotalSum(totSum)

            let today = new Date();
            let monthAgo = new Date();
            monthAgo.setMonth(today.getMonth()-1);
            //console.log(monthAgo);
            //console.log(allCardsArr[0])
            let lastMonthCards = allCardsArr.filter((x) =>  monthAgo < new Date(x.date))
            console.log(lastMonthCards)
            let lastMonthPrices = lastMonthCards.map(x => parseInt(x.price.substr(1)));
            let lmSum = (lastMonthPrices.length > 0)?  lastMonthPrices.reduce((total, amount) => total + amount) : 0;
            setLastMonthSum(lmSum);
        })
    }, [])


    return (
        <div className='header'>
            <div className='header__box'>
                <div className='header__logo'>
                    <img src={Logo} alt='logo' />
                    <div>Social sales</div>
                </div>
                <div className='header__sub-title'>So Far You Earned</div>
                <div className='header__money'>${totalSum}</div>
            </div>

            <div className='header__box--small'>
                <div className='header__box--tiny'>
                    <div className='header__sub-title--small'>
                        <div className='circle orange'></div>

                        <div> This month you earned</div>
                    </div>
                    <div className='header__money--small'>${lastMonthSum}</div>
                </div>
                <div className='header__box--tiny'>
                    <div className='header__sub-title--small'>
                        <div className='circle blue'></div>
                        <div>This week you earned </div>
                    </div>
                    <div className='header__money--small'>$14</div>
                </div>

            </div>
        </div>

    )
}
export default Header