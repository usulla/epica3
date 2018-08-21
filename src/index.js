import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../src/css/output.css?ver=3';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import App from './components/App/App.jsx';
import HeaderBlock from './components/HeaderBlock/HeaderBlock.jsx';
import header_man1 from './images/header/man1.png';
import header_man2 from './images/header/man2.png';
import video_bg from './video/bg.mp4';

const fullpageOptions = {

    sectionClassName: 'section',
    scrollOverflow: true,
    anchors: ['home', 'about-contest', 'select-winner', 'all-works', 'video', 'products-epica'],
    verticalCentered: true,
    horizontalCentered: true,
    fixedElements: '.menu, .fade-background',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

    onLeave: function(origin, destination, direction) {
        var leavingSection = this;
        if (document.body.clientWidth < 768) { //mobile
            if (destination.index == 1) {
                $('.header__man1').removeClass('active');
                $('.header__man2').removeClass('active');
            }
        } else {
            if (destination.index == 2) { //desktop
                $('.header__man1').removeClass('active');
                $('.header__man2').removeClass('active');
            }
            if (destination.index == 1) {
                $('.header__man1').addClass('active');
                $('.header__man2').addClass('active');
            }
        }
        if (destination.index == 1) {
            $('.header__title').addClass('active');
            $('.header__text').addClass('active');
            $('.header__info .button').addClass('active');
            $('.header__info a').addClass('active');
        }
        if (destination.index !== 1) {
            $('.header__title').removeClass('active');
            $('.header__text').removeClass('active');
            $('.header__info .button').removeClass('active');
            $('.header__info a').removeClass('active');
        }
    },
    afterLoad: function(origin, destination, direction) {
        $('#video-bg')[0].play();
        var menuLi = document.querySelectorAll('.menu-ul .menu-ul__li');
        if (document.querySelector('.menu-ul__li.active')) {
            document.querySelector('.menu-ul__li.active').classList.remove('active');
        }
        console.log(destination.index, 'destination.index');
        var leavingSection = this;

        if (destination.index == 0) {
            $('.header__man1').addClass('active');
            $('.header__man2').addClass('active');
            menuLi[0].classList.add('active');
        }
        if (destination.index == 1) {
            menuLi[0].classList.add('active');
        }
        if (destination.index == 2) {
            menuLi[1].classList.add('active');
        }
        if (destination.index == 3) {
            menuLi[2].classList.add('active');
        }
        if (destination.index == 4) {
            menuLi[3].classList.add('active');

            $('#epica_video')[0].play();
        }
        if (destination.index == 5) {
            menuLi[4].classList.add('active');
        }
        if (document.body.clientWidth < 768) { //mobile
            if (destination.index !== 0) {
                $('.header__man1').removeClass('active');
                $('.header__man2').removeClass('active');
            }
        }
    }

};
const FullpageWrapper = fullpageProps => ( < ReactFullpage { ...fullpageProps } render = {
            ({ state, fullpageApi }) => {
                return ( <div>
                    <App / >
                    </div>
                );
            }
        }
        />);
        const All = () => {
    return ( <div >
      <video id="video-bg" muted playsinline preload="metadata" loop class="video-bg" >
                <source src ={ video_bg} type = "video/mp4" codecs = "avc1.42E01E, mp4a.40.2" / >
                <source src ={ video_bg} type = "video/webm" codecs = "vp8, vorbis" / >
                <source src ={ video_bg} type = "video/ogg" codecs = "theora, vorbis" / ></video> 
                <HeaderBlock/>
                <div className='man1'> <img className='header__man1 man' src={header_man1}/></div >
                <FullpageWrapper { ...fullpageOptions }/> <div className='man2'> <img className='header__man2 man' src={ header_man2}/></div >
                </div>
            )
        }
        ReactDOM.render( < All / > , document.getElementById('root'));