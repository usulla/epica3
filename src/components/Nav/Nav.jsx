import React from 'react';
import './nav.js';
import kotex_logo from '../../images/logo.png';
import ToggleMenu from '../ToggleMenu/ToggleMenu.jsx';
import header_logo_dancing from '../../images/header/dance-logo.png';
import header_logo_epica from '../../images/header/logo-epica.png';

const Nav = ({list}) => {
    return (
        <nav className='menu'>
        <ToggleMenu/>
                <div className='logo'><a href='http://www.ehrmann.ru/products/epica/?utm_source=tnt-online&utm_medium=button&utm_content=epica&utm_campaign=Epica_TNT_Dances_aug-dec2018

' target='_blank'><img className='header__logo-epica' src={header_logo_epica}/></a></div>
                <ul className="menu-ul menu__menu-ul">
                    {list.map((li, index) => 
                        <li key={index} className="menu-ul__li">
                        <a href={`#${li[1]}`}>{li[0]}</a>
                        </li>
                    )
                    }
                </ul>
             <div className='header__logo-dancing'><a href='http://tanci.tnt-online.ru' target='_blank'><img src={header_logo_dancing}/></a></div>
        </nav>
    );
};
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-ul__li').forEach(item => {
        item.addEventListener('click', () => {
            if(this.href !=='#home'){
              document.querySelector('.header__man1').classList.remove('active');
              document.querySelector('.header__man2').classList.remove('active');
            }
        });
    });
        });
export default Nav;