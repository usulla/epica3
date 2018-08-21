import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import epica_logo_big from '../../images/header/epica-logo-big.png';

class HeaderLogo extends Component {
    render() {
        return (
        	<section className='section'>
        	  <div className='header__info'>
        	 <div className='header__epica_logo_big'>
             <div className='header__block header__block1'>
                    <img src={epica_logo_big}/>
             </div>
             </div>
               </div>
            </section>
        );
    }
}

export default HeaderLogo;
