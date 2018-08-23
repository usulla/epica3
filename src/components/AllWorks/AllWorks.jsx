import React, { Component } from 'react';
import Slider from "react-slick";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroCard from '../HeroCard/HeroCard.jsx';
import InputRange from 'react-input-range';
import header_logo from '../../images/card/cardgirl.jpg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
   <div className='btn-slide btn-slide-right' onClick={onClick}><i className="fas fa-arrow-right"></i></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
     <div className='btn-slide btn-slide-left' onClick={onClick}><i className="fas fa-arrow-left"></i></div>
  );
}


export default class AllWorks extends React.Component {
  state = {
  	slideIndex:'',
    slideIndex: 0,
    updateCount: 0
  };
  sliderFunc = (e) => {
  	this.slider.slickGoTo(e);
    this.setState({slideIndex: e });
     }

   render() {
     var settings = {
      dots: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
       {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             rows: 2
          }
        },
   
      {
          breakpoint: 979,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             rows: 2
          }
        },
        
        {
          breakpoint: 1850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
             rows: 2
          }
        },
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
             rows: 2
          }
        },
        {
         breakpoint: 2299,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
             rows: 3
          }
        },
        {
        breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
             rows: 3
          }
        }

      ],
     afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };

    return (
<section className='allworks section fp-noscroll'>
<div className='allhero-cards2'>
<div className='allhero-cards'>

<Slider ref={slider => (this.slider = slider)} {...settings}> 
<div>  
<HeroCard datacard={{'gender': 'Девушка', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>  
<div> 
<HeroCard datacard={{'gender': 'Парень', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div> 
<div> 
<HeroCard datacard={{'gender': 'Девушка', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'zodiac': 'Скорпион', 'command':'Мигель/Татьяна', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>
<div>  
<HeroCard datacard={{'gender': 'Парень', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div> 
<div> 
<HeroCard datacard={{'gender': 'Девушка', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>
<div>  
<HeroCard datacard={{'gender': 'Парень', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>
<div> 
<HeroCard datacard={{'gender': 'Девушка', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>
<div> 
<HeroCard datacard={{'gender': 'Парень', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>
<div> 
<HeroCard datacard={{'gender': 'Девушка', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'zodiac': 'Скорпион', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>
<div> 
<HeroCard datacard={{'gender': 'Парень', 'age': '20', 'growth': '160', 'color': 'голубые', 'tattoo':'1-10', 'style_dance':'Классическая хореография', 'taste':'клубника-маракуйя', 'command':'Мигель/Татьяна','zodiac': 'Скорпион', 'time_dancing':'8'}} />
<div class='hero-name site-title'>Сухарева Мария</div>
</div>
  </Slider>
     <InputRange
        maxValue={3}
        minValue={0}
        value={this.state.slideIndex}
        defaultValue={0}
        className='range-form'
        onChange={this.sliderFunc} />
</div>
</div>
</section>
    );
};
}