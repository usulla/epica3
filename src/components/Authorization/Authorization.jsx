import React, { Component } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Authorization extends React.Component {

state = {
    	shouldShowElem: false,
    	showCard: true,
    	showForm2: false
};	

submitChildNote = (value) => {
   this.props.submitNote(this.state.shouldShowElem);
   document.querySelector('.menu').style.zIndex = '';
}

submitShowCard = (value) => {
    this.props.submitNote(this.state.shouldShowElem, this.state.showCard, this.state.showForm2);
    document.querySelector('.menu').style.zIndex = '';
    document.querySelector('#hero-form').style.display = 'none';
    //var savedTarget = e.currentTarget;
    // var soc = savedTarget.dataset.soc;

    $.ajax({
        type: 'POST',
        url: '',
        data: { 'soc': 'dd' },
        success: function(data) {
            console.log('YES!');
            if (data.result == 'success') {

            } else {}
        },
        error: function(xhr, str) {}
    });
}

 render() {
 return (
<div>
<div className='fade-background'>
 <span className='header__title'>Для участия в конкурсе<br/> необходимо авторизоваться</span>
  <div className='btns-authoriz'>

 <div href='' className='btn-authoriz authoriz-vk' data-soc='vk' onClick={this.submitShowCard}>
 <span className='authoriz-icon'><i className="fab fa-vk"></i></span>
 <span className='authoriz-text'>Авторизация</span>
 </div>
 <div href='' className='btn-authoriz authoriz-fb' data-soc='fb' onClick={this.submitShowCard}>
 <span className='authoriz-icon'><i className="fab fa-facebook-f"></i></span>
<span className='authoriz-text'>Авторизация</span>
</div>

 </div>
  <span className='link authoriz-close' onClick={this.submitChildNote}>Не хочу участвовать</span>
</div>
</div>
    )
  }
}

  export default Authorization;