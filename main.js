
const welcomeTween = new TimelineMax()
welcomeTween.to('.welcome',1,{opacity:1}).to('.welcome',.5,{opacity:0})
.to('.redfort',.7,{opacity:1})
.to('.gif-container',1,{bottom:0})

const tween = new TimelineMax()
  tween.to(".flag-container", 1, {
    y:0
  }).to('.container-flag',.6,{display:'none'})

// // init controller
var controller = new ScrollMagic.Controller();
// // create a scene
$(function () {
  // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#area",
    triggerHook: 0,
    duration: 4000,
  }).setPin("#trigger1")
    .setTween(tween)
    .addTo(controller)
 .on('progress',function(e){
     if(e.progress > .6){
         $('.flag').attr('src','https://www.crossed-flag-pins.com/animated-flag-gif/gifs/India_120-animated-flag-gifs.gif')
         $('.flag-container').css({'margin-left':'7px', 'transform':' rotate(7deg)'})
     }
      
    })
    .on('leave',function(){
       $('#area').css('display','none')
       $("html, body").animate({ scrollTop: 0 }, "slow");
    })
});
