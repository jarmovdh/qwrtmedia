

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

//toggleservices
$('#test_content').hide();
$('#details').on('click', function(){
  $('#test_content').slideToggle(800);
});

$('#test_content2').hide();
$('#details2').on('click', function(){
  $('#test_content2').slideToggle(800);
});

$('#test_content3').hide();
$('#details3').on('click', function(){
  $('#test_content3').slideToggle(800);
});

//messenger

var Messenger = function(el) {
  'use strict';
  var m = this;

  m.init = function() {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'PHOTOGRAPHY',
      'COPYWRITING',
      'WEBDESIGN'
    ];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length) {
    var random_text = '';
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function() {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function() {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: (Math.floor(Math.random() * 12)) + 1,
          l: m.messages[m.message].charAt(i)
        });
      }
    }

    var do_cycles = false;
    var message = '';

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function() {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');

    setTimeout(m.animateIn, 200);
  };

  m.init();
};

console.clear();
var messenger = new Messenger($('#messenger'));



//Intro section onload



//ScrollMagic + GSAP Sections

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

tl.from(".nav", {
  duration: 4,
  y: -20,
  opacity: 0,
  delay: 2,
  ease: Back.easeOut.config(1.7),
});
tl.from(".sidebar", {
  duration: 4,
  y: -20,
  opacity: 0,
  delay: 1,
  ease: Back.easeOut.config(1.5),
});



var scene = new ScrollMagic.Scene({
    triggerElement: ".container2",
    triggerHook: 0.9,
    duration: "80%"
  })

  .addIndicators({
    colorTrigger: "purple",
    colorStart: "purple",
    colorEnd: "purple",
    indent: 5
  })
  .setTween(tl)
  .addTo(controller)
  .reverse(false);

//new section gsap//

$(".section3").each(function() {

  var contentTweenTL = new TimelineMax({
    repeat: 0,
  });

  var contentTween = contentTweenTL.from($(this).find(".content3left"), .6, {
      x: -40,
      autoAlpha: 0,
      delay: 0,
      ease: Power2.easeOut
    }, .1)

    .from($(this).find(".content3right"), .6, {
      y: 40,
      autoAlpha: 0,
      delay: 0,
      ease: Power2.easeOut
    }, .1);

  var scene3 = new ScrollMagic.Scene({
      triggerElement: this,
      offset: 20,
      reverse: false
    })
    .setTween(contentTween)
    .addTo(controller)
    .addIndicators();
});


var vid = document.getElementById(".video");
vid.autoplay = true;
vid.load();


//carousel


// //barba js//
// function delay(n) {
//   n = n || 2000;
//   return new Promise ((done)) => {
//     setTimeout(()) => {
//       done();
//     }, n);
//   });
// }
//
// function pateTransition(){
//   var tl = gsap.timeline();
//   tl.to(".loading-screen", {
//     duration: 1.2,
//     width: "100%",
//     left: "0%",
//     ease: "Expo.easeInOut"
//   });
// }
//
// tl.to(".loading-screen", {
//   duration: 1,
//   width: "100%",
//   left: "100%",
//   ease: "Expo.easeInOut",
//   delay: 0.3,
// });
// tl.set(".loading-screen", {left: "-100%"});
//
// function contentAnimation(){
//   var tl = gsap.timeline();
// tl.from("animate-this", {duration:1, y: 30, opacity: 0, stagger: 0,4, dealy 0.2
// });
// }
//
// $(function) {
//   barba.intit({
//     sync: true,
//
//     transitions: [
//     {
//       async leave(data){
//         const done = this.async();
//
//         pageTransition();
//         await delay(1000);
//         done();
//       },
//
//       async enter(data) {
//         contentAnimation();
//       },
//       async once(data){
//         contentAnimation();
//       },
//     },
//   ],
// });
// });
//
// Barba.Pjax.getTransition = function() {
//      return transEffect;
//    }
//    Barba.Pjax.start();
// });
