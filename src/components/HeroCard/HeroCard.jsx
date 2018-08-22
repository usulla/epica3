import React, { Component } from 'react';
import card_man from '../../images/card/cardman.jpg';
import card_girl from '../../images/card/cardgirl.jpg';

class HeroCard extends React.Component {

  render() {
    var calssadd;
    if (this.props.datacard.gender == 'Парень'){
     calssadd = 'mancard';
    }
    else{
calssadd = 'girlcard';
    }
    return (
<div className='hero-card__card'>

<div className={`hero-card__left ${calssadd}`}>
</div>

<div className='hero-card__right'>
  <div className='left-col'>
   <div className='row-card'>
     <span className='row-card__title'>Пол</span>
     <span className='row-card__content site-title'>{this.props.datacard.gender}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Возраст</span>
     <span className='row-card__content site-title'>{this.props.datacard.age}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Рост</span>
     <span className='row-card__content site-title'>{this.props.datacard.growth}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Знак зодиака</span>
     <span className='row-card__content site-title'>{this.props.datacard.zodiac}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Цвет глаз</span>
     <span className='row-card__content site-title'>{this.props.datacard.color}</span>
   </div>
  </div>
  <div className='right-col'>
  <div className='row-card'>
     <span className='row-card__title'>Сколько татуировок</span>
     <span className='row-card__content site-title'>{this.props.datacard.tattoo}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Стиль танца</span>
     <span className='row-card__content site-title'>{this.props.datacard.style_dance}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Любимый вкус Epica</span>
     <span className='row-card__content site-title'>{this.props.datacard.taste}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Команда какого наставника</span>
     <span className='row-card__content site-title'>{this.props.datacard.command}</span>
   </div>
    <div className='row-card'>
     <span className='row-card__title'>Сколько часов в день занимается танцами</span>
     <span className='row-card__content site-title'>{this.props.datacard.time_dancing}</span>
   </div>
  </div>
</div>

</div>

    )
  }
}

export default HeroCard;