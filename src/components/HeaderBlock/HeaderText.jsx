import React, { Component } from 'react';
import Button from '../Button/Button.jsx';

class HeaderText extends Component {
    render() {
        return (
        	<section className='section'>
        	 <div className='header__info'>
        	 <div className='header__epica_logo_big'>
               <div className='header__block header__block2'>
               <span className='header__title'>Выбирай СВОЕГО победителя шоу и будь в форме вместе с EPICA!</span>
               <div className='header__text'>
               В шоу ТАНЦЫ, с самых первых этапов кастингов участвуют сотни ярких и талантливых танцовщиков, но победитель всего один! Используй характ еристики ниже и выбирай СВОЕГО идеального Победителя шоу ТАНЦЫ уже сейчас! Если образ совпадёт с реальностью, то тебя ждут сочные призы от EPICA!
                </div>
                <div className='button'><a href='#select-winner'>Участвовать</a></div>
                <a className='link' href=''>Правила конкурса</a>
               </div>
               </div>
                 </div>
            </section>
        );
    }
}

export default HeaderText;
