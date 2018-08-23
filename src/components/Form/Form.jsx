import React, { Component } from 'react';
import $ from 'jquery';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import SelectBox1 from './Select.jsx';
import InputRange from 'react-input-range';
import RangeBox from './RangeBox.jsx';
import Authorization from '../Authorization/Authorization.jsx';
import HeroCardBlock from '../HeroCard/HeroCardBlock.jsx';
import './form.js';

class FormBlock extends Component {

    state = {
      value:'',
        shouldShowElem: false,
        showCard: false,
        showForm2: true,
        age: 18,
        growth: 175,
        time_dancing: 8
    };

    changeAvatar = (value1, value2) => {
        this.state[value1] = value2;
        console.log(value1, value2)
        if (value1 == 'gender') {
            document.querySelector('.fas.fa-question').style.display = 'none';
            if (document.querySelector('.man-ava')) {
                document.querySelector('.form-avatar').classList.remove('man-ava');
            }
            if (document.querySelector('.girl-ava')) {
                document.querySelector('.form-avatar').classList.remove('girl-ava');
            }
            if (value2 == 'Парень') {
                document.querySelector('.form-avatar').classList.add('man-ava');
            } else {
                document.querySelector('.form-avatar').classList.add('girl-ava');
            }
        }
    };

 submitNote = (value1, value2) => {
 	console.log(value1, value2, 'ffff')
        call();
        function call() {
            var msg = $('#hero-form').serialize();
            console.log(msg);
            $.ajax({
                type: 'POST',
                url: '',
                data: msg,
                success: function(data) {
                  
                },
                error: function(xhr, str) {
                	 console.log('Noo!');

        // DELETE Form if mobile
        if (document.documentElement.clientWidth < 768){
            document.querySelector('#hero-form').style.display = 'none';
//document.querySelector(".header").scrollIntoView();

        }
                   // this.submitNote;
                }
            });
        }
        this.setState({ shouldShowElem: value1 });
        this.setState({ showCard: value2 });
        document.querySelector('.menu').style.zIndex = '-1';
    }
    submitShowCard = (value) => {
    	this.setState({ showCard: value });
        document.querySelector('.menu').style.zIndex = '';
    }
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    render() {
  
    	var options1 =['Парень', 'Девушка'];
    	var options2 =['Овен', 'Телец', 'Близнецы', 'Рак','Лев','Дева','Весы','Скорпион','Стрелец','Козерог', 'Водолей', 'Рыбы'];
        var options3 =['Карие', 'Голубые', 'Серые', 'Зеленые'];
        var options4 =['нет', '1-10', 'больше 10'];

        var options5 =['Хип-хоп (брейк данс)', 'Джаз-фанк', 'Тверк (бути дэнс)', 'Дэнсхолл','Паппинг','Вог','Степ','Контемпорари','Крамп', 'Латина (реггетон)','Стрип-пластика','Экспериментал','Авторская хореография','Классическая хореография','Современная хореография','Бальные танцы','Народный танец'];    
        var options6 =['натуральный', 'ананас', 'кокос-ваниль', 'красный апельси','клубника','вишня-черешня','гранат-малина','манго-семена чиа','персик-маракуйя', 'лимон','манго','киви-виноград','гранат-апельсин','клубника-маракуйя','Bouquet или Teasy'];  
        var options7 =['Егор Дружинии', 'Татьяна Денисова', 'Мигель'];

        return (
            <section className='form section'>
            <div>
           {this.state.shouldShowElem &&
           <Authorization submitNote={this.submitNote}/>
                }
            </div>
            <div>
      {this.state.showCard &&
      	  <div className='hero-card__block'>
           <HeroCardBlock submitShowCard={this.submitShowCard} datacard={this.state}/>
           </div>
      }
      </div>

            <div>
            </div>
              {this.state.showForm2 &&
              	<div>
             <Form method="post" id="hero-form" action="javascript:void(null);" onSubmit={this.submitNote}>
        <FormGroup>
            <div className='form-avatar'><i class="fas fa-question"></i></div>
            <div className="form-content">
            <legend className='form-title site-title'>Выбери своего победителя</legend>
            <fieldset className='form-col1'>
            <SelectBox1 changeAvatar={this.changeAvatar} name={'gender'} options={options1} disabled_option={'Пол'} />


            <RangeBox classN={'first-range'} format={'лет'} valuedef={'value1'} changeAvatar={this.changeAvatar} id2={'age'} label={'Возраст'} min={16} max={40} defaultvalue={18}/>


             <RangeBox classN={'second-range'} format={'см'} valuedef={'value2'} changeAvatar={this.changeAvatar} id2={'growth'} label={'Рост'} min={160} max={210} defaultvalue={175}/>
             
             <SelectBox1 changeAvatar={this.changeAvatar} name={'zodiac'} options={options2} disabled_option={'Знак зодиака'}/>
             <SelectBox1 changeAvatar={this.changeAvatar} name={'color'} options={options3} disabled_option={'Цвет глаз'}/>
             </fieldset>
             <fieldset className='form-col2'>
             <SelectBox1 changeAvatar={this.changeAvatar} name={'tattoo'} options={options4} disabled_option={'Сколько татуировок'}/>
             <SelectBox1 changeAvatar={this.changeAvatar} name={'style_dance'} options={options5} disabled_option={'Стиль танца'}/>
             <SelectBox1 changeAvatar={this.changeAvatar} name={'taste'} options={options6} disabled_option={'Любимый вкус Epica'}/>
             <SelectBox1 changeAvatar={this.changeAvatar} name={'command'} options={options7} disabled_option={'Команда какого наставника'}/>
 <RangeBox classN={'th-range'} format={'ч'} valuedef={'value3'} changeAvatar={this.changeAvatar} id2={'time_dancing'} label={'Сколько часов в день занимается танцами'} min={0} max={24} defaultvalue={8}/>
             </fieldset>
            </div>
            </FormGroup>
               <input type="submit" className='button' value='Это мой победитель'/>
           </Form>
            </div>
 } {/* Show form */}
            </section>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {


})

export default FormBlock;