
//sticky pin 2/

$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({
      triggerElement: ".arrow",
      duration: 400,
      pushFollowers: false,
      offset: 400,
    })
						.setPin(".imagecontainer2")
						.addIndicators({name: "4 (duration: 400)"}) // add indicators (requires plugin)
						.addTo(controller);

	});

// image change on scroll



var images2 = [
		"images/imagegallery/carhartt_nb-1.jpg",
		"images/imagegallery/portrait-1.jpg",
		"images/imagegallery/bruiloft-2.jpg",
    "images/imagegallery/carhartt_elmwood_insta2.jpg",

	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images2.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 3,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg2").attr("src", images2[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();


	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".arrow", duration: 400, offset: 400})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

//sticky pin 1/
$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({
      triggerElement: ".arrow",
      duration: 400,
      pushFollowers: false,
      offset: 400,
    })
						.setPin(".imagecontainer")
						.addIndicators({name: "2 (duration: 400)"}) // add indicators (requires plugin)
						.addTo(controller);

	});

// image change on scroll



var images = [
		"images/imagegallery/carhartt_nb-2.jpg",
		"images/imagegallery/nbkarim-1.jpg",
		"images/imagegallery/camaro-1.jpg",
    "images/imagegallery/carhartt_elmwood.jpg",

	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 3,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();


	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".arrow", duration: 400, offset: 400})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


//clock
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


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
      'WEBDESIGN',
      'AMSTERDAM'
    ];

    setTimeout(m.animateIn, 0);
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

      setTimeout(m.animateIn, 0);
    } else {
      setTimeout(m.animateFadeBuffer, 0);
    }
  };

  m.animateFadeBuffer = function() {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: (Math.floor(Math.random() * 13)) + 1,
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
      setTimeout(m.cycleText, 4000);
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

    setTimeout(m.animateIn, 0);
  };

  m.init();
};

console.clear();
var messenger = new Messenger($('#messenger'));



//Intro section onload



//ScrollMagic + GSAP Sections

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();


tl.to(".arrow", {
  duration: 4,
  y: -20,
  opacity: 0,
  delay: 1,
});

tl.to("#messenger", {
  transform: 0.5,
});

// tl.from(".mockup", {
//   duration: 4,
//   x: -200,
//   opacity: 0,
//   delay: 2,
// });


var scene = new ScrollMagic.Scene({
    triggerElement: ".container2",
    triggerHook: 1.8,
    duration: "100%"
  })

  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue",
    indent: 10
  })
  .setTween(tl)
  .addTo(controller)
  .reverse(true);

  var controller2 = new ScrollMagic.Controller();
  var tl2 = new TimelineMax();



  tl2.from(".mockup", {
    duration: 2,
    x: -200,
    opacity: 0,
    delay: 2,
  });


  var scene = new ScrollMagic.Scene({
      triggerElement: "#section3",
      triggerHook: 2,
      duration: "70%"
    })

    .addIndicators({
      colorTrigger: "red",
      colorStart: "red",
      colorEnd: "red",
      indent: 5
    })
    .setTween(tl2)
    .addTo(controller2)
    .reverse(false);
