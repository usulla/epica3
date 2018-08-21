import React, { Component } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroCard from '../HeroCard/HeroCard.jsx';
import SocButton from '../SocButton/SocButton.jsx';

class HeroCardBlock extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { 

    };
  }

  render() {
    return (
<div className='hero-card'>
<div className='hero-card__title form-title site-title'>
<p>
Поздравляем! Твоя работа добавлена <a href='#all-works' className='link'>в галерею</a>.
</p>
<p>
Дождись финала шоу и если рофиль твоего<br/> идеального танцовщика совпадает с реальным<br/> победителем - тебя ждут реальные призы от Epica!
</p>
</div>

<HeroCard datacard={this.props.datacard}/>

<div className='btns-authoriz'>
<SocButton text={'Поделиться'} classlist={'authoriz-vk'}  datasoc={'vk'} socicon={'fab fa-vk'} onClick={this.submitShowCard}/>
<SocButton text={'Поделиться'} classlist={'authoriz-fb'}  datasoc={'fb'} socicon={'fab fa-facebook-f'} onClick={this.submitShowCard}/>
 </div>

</div>

    )
  }
}

export default HeroCardBlock;