import React, { Component } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import video_tancy from '../../video/tancy.mp4';

class VideoPage extends React.Component {

  render() {
    return (
 <section className='video-page section'>
<div className='video-page__block'>
{/*<iframe id="epica_video" width="100%" height="100%" src="//rutube.ru/play/embed/11325377?autoStart=true" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen allow="autoplay"></iframe>*/}

{/*<iframe id="epica_video" width="100%" height="100%" src="//rutube.ru/play/embed/11325377" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe> */}
				<video id="epica_video" controls="controls" muted loop class="fullscreen-bg__video">

					<source src={video_tancy} type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"/>
						<source src={video_tancy} type="video/webm" codecs="vp8, vorbis"/>
							<source src={video_tancy} type="video/ogg" codecs="theora, vorbis"/>
							</video>


</div>

</section>

    )
  }
}
/*Mute Autoplay */
document.addEventListener('DOMContentLoaded', function(){
				if(document.getElementById('epica_video')){
					var player = document.getElementById('epica_video');
					player.addEventListener('load', function() {
						player.contentWindow.postMessage(JSON.stringify({ type: 'player:mute'}),'*');
					});
				}
})

export default VideoPage;