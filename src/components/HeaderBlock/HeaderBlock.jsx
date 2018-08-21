import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';

import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import header_man1 from '../../images/header/man1.png';
import header_man2 from '../../images/header/man2.png';

class HeaderBlock extends Component {
    render() {
        return (
            <section className='header'>  
              <Nav list={[['Главная','home'],['Выбирай своего победителя','select-winner'],['Все работы','all-works'],['Видео', 'video'], ['Продукты Epica', 'products-epica']]}/>
                <MobileMenu list={[['Главная','home'],['Выбирай своего победителя','select-winner'],['Все работы','all-works'],['Видео', 'video'], ['Продукты Epica', 'products-epica']]}/>
            </section>           
        );
    }
}

export default HeaderBlock;
