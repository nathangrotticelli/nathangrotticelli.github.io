/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var vrView;
// var playButton;
// var muteButton;

function onLoad() {
  // Load VR View.
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: '100%',
    video: 'reel.webm',
    is_stereo: false
    //is_debug: true,
    //default_heading: 90,
    //is_yaw_only: true,
    //is_vr_off: true,
  });
  // vrView.on('ready', onVRViewReady);
    $('.ytplayer-frame').attr('src', 'https://www.youtube.com/embed/5xqPUyI3pQY');
  // playButton = document.querySelector('#toggleplay');
  // muteButton = document.querySelector('#togglemute');

  // playButton.addEventListener('click', onTogglePlay);
  // muteButton.addEventListener('click', onToggleMute);
}

// function onVRViewReady() {
//   console.log('vrView.isPaused', vrView.isPaused);
//   // Set the initial state of the buttons.
//   if (vrView.isPaused) {
//     playButton.classList.add('paused');
//   } else {
//     playButton.classList.remove('paused');
//   }
// }

// function onTogglePlay() {
//   if (vrView.isPaused) {
//     vrView.play();
//     playButton.classList.remove('paused');
//   } else {
//     vrView.pause();
//     playButton.classList.add('paused');
//   }
// }

// function onToggleMute() {
//   var isMuted = muteButton.classList.contains('muted');
//   if (isMuted) {
//     vrView.setVolume(1);
//   } else {
//     vrView.setVolume(0);
//   }
//   muteButton.classList.toggle('muted');
// }

window.addEventListener('load', onLoad);
$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".expanded-contact-form").offset().top},
        'slow');
});

     $('.ytplayer-frame').on('click', function( e ) {
      if(window.innerWidth < 760){
        alert('hi im here');
      }
       e.preventDefault();
       //assumes that by forcing window to go to youtube will kick up option to open in app where experience works - plays my full showreel
       window.location = "https://www.youtube.com/watch?v=0x16ngo8xfY&list=PLzSXIFcDqpiCiKXMtXtVIHnmor9uUsEhC&autoplay=1";
     });

$(".white-text").click(function() {
    $('html,body').animate({
        scrollTop: $(".expanded-contact-form").offset().top},
        'slow');
});
