$(document).ready(function(){

    //loader

    var tl = new TimelineLite({paused: true}),
    	intro = document.getElementById("intro"),
		loader = document.getElementById("loader"),
		prelogo = $('.prelogo'),
		logodown = document.getElementsByClassName("logodown"),
		tlLoader = new TimelineMax({repeat: 0, onComplete: loadContent});
	tl
		.set(intro, {autoAlpha:1})



	// Loader Timeline
		tlLoader
			.set(logodown,{opacity:0})
			.staggerFromTo(prelogo, 0.9, 
				{x:0,autoAlpha: 0}, 
				{x:20,autoAlpha: 1, ease:Back.easeInOut}, 
				0.9
			)
			.fromTo(logodown, 0.7, 
				{x: 0,autoAlpha: 1}, 
				{x: -20,autoAlpha: 0, ease:Power0.easeNone},
				1.5
			);

			function loadContent(){
			var tlLoaderOut = new TimelineLite({onComplete: contentIn});
			tlLoaderOut
				.to(loader, 0.9, {y: -200, autoAlpha: 0, ease:Back.easeIn}, '+=0.3')
				;
			}


			function contentIn(){
				// console.log("suman ");
				tl.play();
				$('body').css('overflow','visible');
			}


		// Init ScrollMagic
		var controller = new ScrollMagic.Controller();

		// pin the intro
		var pinIntroScene = new ScrollMagic.Scene({
			triggerElement: '#culture-intro',
			triggerHook: 0,
			duration: '40%'
		})
		.setPin('#culture-intro', {pushFollowers: false})
		.addTo(controller);


		// pin again
		var pinIntroScene2 = new ScrollMagic.Scene({
			triggerElement: '#project01',
			triggerHook: 0.4
		})
		.setPin('#culture-intro', {pushFollowers: false})
		.addTo(controller);

		// pin project5
		var pinproject04 = new ScrollMagic.Scene({
			triggerElement: '#project04',
			triggerHook: 0,
			duration:'30%'
		})
		.setPin('#project04')
		.addTo(controller);

		// parallax scene

		// var parallaxTl = new TimelineMax();
		// parallaxTl
		// 	.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		// 	.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		// 	;

		// var slideParallaxScene = new ScrollMagic.Scene({
		// 	triggerElement: '.bcg-parallax',
		// 	triggerHook: 1,
		// 	duration: '100%'
		// })
		// .setTween(parallaxTl)
		// .addTo(controller);

		// loop through each .project element
		// $('.project').each(function(){

			
			//if it contains .penpic classs return 
			// if($(this).is('.penpic')){ 
		 //     	$(this).css('opacity',1);
			// }else{
				// build a scene
			// var ourScene = new ScrollMagic.Scene({
			// 	triggerElement: this.children[0],
			// 	triggerHook: 0.9
			// }).setClassToggle(this, 'fade-in') // add class to project01
			// .addIndicators({
			// 	name: 'fade scene',
			// 	colorTrigger: 'black',
			// 	colorStart: '#75C695',
			// 	colorEnd: 'pink'
			// }) // this requires a plugin
		// 	.addTo(controller);
		// 	}	
		// });


	// 	// var logodown = document.getElementsByClassName("logodown");
	// 	// 	console.log('thisthis',logodown);
	// 	// 	TweenLite.from(logodown, 2 , {opacity:0,x:-150,ease:Power1.easeOut});

		// var scene = document.getElementById('scene'),
	 //    	parallax = new Parallax(scene);



	// // Loader Timeline
	// tlLoader
	// 	console.log('thisthis',logodown);
	// 	TweenLite.from(logodown, 2 , {opacity:0,x:-150,ease:Power1.easeOut});


	var controller = new ScrollMagic.Controller();

	var scene01 = new ScrollMagic.Scene({
		triggerElement: '#slide01',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#slide01 .pin-wrapper')
	.addTo(controller);

	var scene02 = new ScrollMagic.Scene({
		triggerElement: '#slide01',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#slide02 .pin-wrapper')
	.addTo(controller);

	var scene03 = new ScrollMagic.Scene({
		triggerElement: '#slide02',
		triggerHook: 0,
		duration: '200%'
	})
	.setPin('#slide03 .pin-wrapper')
	.addTo(controller);

	var scene04 = new ScrollMagic.Scene({
		triggerElement: '#slide03',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#slide04 .pin-wrapper')
	.addTo(controller);



	//pen effect

		// move the pen body up to connect with the first part
	TweenMax.set('.part3', {y: -572});

	// hide all headings and text
	//TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

	// create a tween that will move the pen body back to its original css position
	var bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease:Linear.easeNone});

	// Init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

	// Create a Scene 1 - move pen body back to start - HOW?
	var bodyToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		offset: 287,
		duration: 572
	})
	.setTween(bodyToStart)
	.addTo(controller);

	// move 4 and 5 down, to connect with part 6 - HOW?
	// TweenMax.set('.part5', {y: 120});
	// TweenMax.set('.part4', {y: 289});

	// move part 6 to connect with the body
	TweenMax.set('.part6', {y: -846});

	// move 4 and 5 to connect with part 6 again
	TweenMax.set('.part5', {y: -726}); /* 120 - 846 */
	TweenMax.set('.part4', {y: -557}); /* 289 - 846 */

	// Create scene for part 6 - move part 6 back to start
	var p6ToStart = new TweenMax.to('.part6', 1, {y:0, ease:Linear.easeNone});

	var p6ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		duration: 846,
		offset: 1250
	})
	.setTween(p6ToStart)
	.addTo(controller);

	// Create scene for part 5 - move part 5 back to start
	var p5ToStart = new TweenMax.to('.part5', 1, {y:0, ease:Linear.easeNone});

	var p5ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		duration: 726,
		offset: 1250
	})
	.setTween(p5ToStart)
	.addTo(controller);

	// Create scene for part 4 - move part 4 back to start
	var p4ToStart = new TweenMax.to('.part4', 1, {y:0, ease:Linear.easeNone});

	var p4ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		duration: 557,
		offset: 1250
	})
	.setTween(p4ToStart)
	.addTo(controller);

	// Loop through all parts and add a class .fade-in
	$('.parts li').each(function(){

		// build a scene
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.55
		})
		.setClassToggle(this, 'fade-in')
		.addTo(controller);

	});




});





// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.












(function($) {

	/* 
		Colors before reset
		orange - #F8AD43
		red - #F8876E
		green - #73C996
	
		Meter bcg - #c6d7df to #5AB783
		Meter stroke - #7c99a2 to #448962
	*/

	var $body = $('body'),
		$coin = $('#Coin'),
		path = [{x: -90, y: 120},{x: -45, y: -220},{x: 0, y: 120}],
		$BulbIdea = $('#BulbIdea'),
		$BulbIdeaLight = $('#MainBulb2'),
		$part1 = $('#Part1'),
		$Petr = $('#Petr'),
		$h1 = $('h1'),
		$MainBulb = $('#MainBulb'),
		$Liquids = $('.liquid'),
		$Liquid01 = $('#Liquid1'),
		$Liquid02 = $('#Liquid2'),
		$Liquid03 = $('#Liquid3'),
		$Liquid04 = $('#Liquid4'),
		$Liquid05 = $('#Liquid5'),
		$Liquid06 = $('#Liquid6'),
		$Liquid07 = $('#Liquid7'),
		$Liquid08 = $('#Liquid8'),
		$Liquid09 = $('#Liquid9'),
		$LiquidInsideMask01 = $('#LiquidInside1Mask'),
		$LiquidInsideMask02 = $('#LiquidInside2Mask'),
		$LiquidInsideMask03 = $('#LiquidInside3Mask'),
		$LiquidInsideMask04 = $('#LiquidInside4Mask'),
		$LiquidInsideMask05 = $('#LiquidInside5Mask'),
		$LiquidInsideMask06 = $('#LiquidInside6Mask'),
		$LiquidInsideMask07 = $('#LiquidInside7Mask'),
		$bulb1 = $('#Bulb1 .bulb'),
		$bulb2 = $('#Bulb2 .bulb'),
		$bulb3 = $('#Bulb3 .bulb'),
		$meterBcg = $('#meterBcg'),
		$meterStroke = $('#meterStroke'),
		$part2light = $('#Part2 .light'),
		$part2lightLeft = $('#Part2 .light-left'),
		$part2lightMid = $('#Part2 .light-mid'),
		$part2lightRight = $('#Part2 .light-right'),
		$printerLightsTop = $('#PrinterLIghtTop, #PrinterLIghtTop_2_'),
		$printerLightsBottom = $('#PrinterLIghtBottom, #PrinterLIghtBottom_1_'),
		$mainLight = $('#MainLight'),
		$paper = $('#Paper'),
		$paperText = $('#PaperText text'),
		$slider = $('#slider'),
		$pointer = $('#pointer'),
		$stage = $('#stage'),
		$MainMask = $('#MainMask'),
		$smile = $('#smile'),
		mainTl = new TimelineMax();

	function clearStage(){
		var clearTl = new TimelineMax();

		clearTl
			.set($coin, {x: -90, y: 100, scale: 0.5, transformOrigin: 'center center'})
			.set($MainBulb, {fill: '#ffffff'})
			.set($Liquids, {stroke: '#ffffff'})
			.set($Petr, {autoAlpha: 1, x: '1400%', scale: 2.5, transformOrigin: 'bottom center'})
			.set($stage, {autoAlpha: 0.5})
			.set($MainMask, {attr: {x: 932}})
			// Clear liquid
			.set($LiquidInsideMask01, {attr: {y: 492}}) /* y value = y + height */
			.set($LiquidInsideMask02, {attr: {y: 494}}) /* 451+43 */
			.set($LiquidInsideMask03, {attr: {y: 491}})
			.set($LiquidInsideMask04, {attr: {y: 656}})
			.set($LiquidInsideMask05, {attr: {y: 654}})
			.set($LiquidInsideMask06, {attr: {y: 651}})
			.set($LiquidInsideMask07, {attr: {y: 651}})
			.set($pointer, {rotation: -45, transformOrigin: 'bottom center'})
			.set($paper, {y: '+=60'});

		return clearTl;
	}

	function getIntroTl(){
		var introTL = new TimelineMax();

		introTL
			.set($h1, {y: '-=40px'})
			.to($Petr, 0.7, {x: '1000%', ease: Power4.easeInOut})
			.fromTo($h1, 0.4, {x: '-46%', autoAlpha: 0}, {x: '-50%', autoAlpha: 1}, '-=0.3')
			.fromTo($smile, 0.3, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1, ease: Power4.easeInOut}, '+=1')
			.add('zoom-out')
			.to($Petr, 1, {x: '0%', scale: 1, ease: Power4.easeInOut}, 'zoom-out+=1')
			.to($h1, 0.4, {autoAlpha: 0}, 'zoom-out+=1')
			.to($MainMask, 1, {attr: {x: 131}, ease: Power4.easeInOut}, 'zoom-out+=1')
			.set($body, {className: '+=is-active'}, 'zoom-out+=1')
			.set($h1, {y: '-=60px', text: 'Welcome to Fusemachines Nepal!'}) // update heading text
			.add('text-in')
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, 'text-in')
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
			.set($h1, {y: '-=30px', text: "Let's take a tour ..."})
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1.5')
			.to($stage, 0.1, {autoAlpha: 1, ease: Power0.none}, '-=0.1');

		introTL.seek('text-in');

		return introTL;
	}

	function getIdeaTl(){
		var ideaTL = new TimelineMax();

		ideaTL
			// got idea
			.set($BulbIdea, {autoAlpha: 1, immediateRender: false})
			.from($BulbIdea, 0.3, {y: '+=40px', ease:Bounce.easeOut})
			.set($h1, {y: '-=30px', text: "We build Artificially Intelligent Softwares"})
			.to($h1, 0.1, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1.9')
			.set($h1, {y: '-=30px', text: "Intelligent Software Solutions"})
			.fromTo($BulbIdeaLight, 0.1, {fill: '#ffffff'}, {fill: '#73C996', repeat: 3, yoyo: true})
			.fromTo($BulbIdeaLight, 0.1, {fill: '#ffffff'}, {fill: '#F8876E', repeat: 3, yoyo: true})
			.fromTo($BulbIdeaLight, 0.6, {fill: '#ffffff'}, {fill: '#F8AD43'})
			.to($BulbIdea, 0.4, {y: '-=20px', scale: 1.1, transformOrigin: 'center bottom', ease: Power4.easeOut})
			.to($BulbIdea, 0.1, {y: '+=120px', scale: 0.8, ease:Back.easeIn})
			
			// idea out of the head
			.set($coin, {autoAlpha: 1}, '+=0.3')
			.to($coin, 3, {rotation: 720, bezier: {curviness: 0.3, values: path}, ease:SlowMo.ease.config(0.8, 0.6, false)})
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, '-=5.4')
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '-=3.4')
			.set($h1, {y: '-=30px', text: "We make it happen"}, '-=3.3')
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, '-=3.1')
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '-=1.1')
			.to($part1, 0.05, {rotation: 5, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 5, yoyo: true});
			
		return ideaTL;
	}

	function getPart2Tl(){
		var part2TL = new TimelineMax();

		part2TL
			.add('part2-lights')
			.to($pointer, 1.9, {rotation: 20})
			.staggerTo($part2light, 0.1, {fill: '#F8AD43'}, 0.1, 'part2-lights')
			.staggerTo($part2light, 0.1, {fill: '#F8876E'}, 0.1, 'part2-lights+=0.3')
			.staggerTo($part2light, 0.1, {fill: '#73C996'}, 0.1, 'part2-lights+=0.8')
			.to($meterBcg, 0.1, {fill: '#5AB783'}, 'part2-lights+=0.8')
			.to($meterStroke, 0.1, {stroke: '#448962'}, 'part2-lights+=1')
			.to($slider, 1.1, {x: '-=10px', ease:Power4.easeInOut}, 'part2-lights+=1')
			.set($bulb1, {fill: '#5AB783'}, 'part2-lights+=1.2')
			.set($bulb2, {fill: '#F8876E'}, 'part2-lights+=1.5')
			.set($bulb3, {fill: '#F8AD43'}, 'part2-lights+=2');

		return part2TL;
	}

	function getFillTubesTl(){
		var fillTubesTL = new TimelineMax();

		// Get path length
		// var path = document.querySelector('#Liquid9');
		// var length = path.getTotalLength();

		/* 
			01 - 345
			02 - 101
			03 - 124
			04 - 124
			05 - 228
			06 - 124
			07 - 213
			08 - 393
			09 - 131
		*/

		var liquidLength = [131, 213, 228, 124, 124, 124, 101, 345, 393];

		// Reset all liquids to invisible - there are a few exceptions
		$Liquids.each(function(index, element){

			TweenMax.set(element, {strokeDasharray: liquidLength[index], strokeDashoffset: liquidLength[index]});

		});
		
		fillTubesTL
			.set($Liquids, {stroke: '#F8876E'})
			.to($Liquid01, 1.9, {strokeDashoffset: 0, ease:Power0.easeNone})
			
			// create a tween
			.add('flask01')
			.set($h1, {y: '-=30px', text: "with our 60+ Engineers"})
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1')
			.set($h1, {y: '-=30px', text: "8+ Designers"})
			.to($Liquid02, 0.4, {strokeDashoffset: 0, ease:Power0.easeNone}, '-=0.1')
			
			// add another one
			.add('flask02')
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1')
			.set($h1, {y: '-=30px', text: "15+ Business Developers"})
			.to($Liquid03, 0.4, {strokeDashoffset: 0, ease:Power0.easeNone}, '-=0.1')
			
			// add them to a timeline
			.add('flask03')
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1')
			.set($h1, {y: '-=30px', text: "10+ Data Analysts"})
			.to($Liquid04, 0.3, {strokeDashoffset: 0, ease:Power0.easeNone})
			.to($Liquid05, 0.4, {strokeDashoffset: 0, ease:Power0.easeNone})
			
			// create multiple timelines
			.to($Liquid06, 0.6, {strokeDashoffset: 0, ease:Power0.easeNone})
			.add('flask04')
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1')
			.set($h1, {y: '-=30px', text: "3 PhDs"})

			// don't fill main flask yet
			.to($Liquid07, 1, {strokeDashoffset: 0, ease:Power0.easeNone})

			// fine tune easing
			.to($Liquid08, 1.4, {strokeDashoffset: 0, ease:Power0.easeNone})
			.add('flask06')
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1')
			.set($h1, {y: '-=30px', text: "1 magician certified"})
			
			.to($Liquid09, 0.5, {strokeDashoffset: 0, ease:Power0.easeNone})
			.add('flask07')
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 0.1, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=1')
			.set($h1, {y: '-=30px', text: "Overall, We are fun company"})

			// and most importantly + have fun
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($h1, 2, {scale: 1, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false})})
			.to($h1, 0.2, {scale: 1.1, autoAlpha: 0, ease: Power0.easeNone})
			.set($h1, {scale: 0.8, text: "We are 120+ and growing..."})
			.to($h1, 0.2, {scale: 1, autoAlpha: 1, ease: Power4.easeInOut}, '+=0.2')
			.to($h1, 0.1, {autoAlpha: 0, ease: Power4.easeInOut}, '+=0.9')
			.set($h1, {y: '-=30px', text: "Want to join us?"})

			.add('main-flask')

			// fill in all flasks
			.to($LiquidInsideMask01, 5.5, {attr: {y: 415}, ease:Power0.easeNone}, 'flask01')
			.to($LiquidInsideMask02, 7, {attr: {y: 451}, ease:Power0.easeNone}, 'flask02')
			.to($LiquidInsideMask03, 4, {attr: {y: 452}, ease:Power0.easeNone}, 'flask03')
			.to($LiquidInsideMask04, 3, {attr: {y: 602}, ease:Power0.easeNone}, 'flask04')
			.to($LiquidInsideMask05, 2, {attr: {y: 563}, ease:Power0.easeNone}, 'main-flask')
			.to($LiquidInsideMask06, 1, {attr: {y: 608}, ease:Power0.easeNone}, 'flask06')
			.to($LiquidInsideMask07, 1, {attr: {y: 608}, ease:Power0.easeNone}, 'flask07');

		return fillTubesTL;
	}

	function getFinalCTATl(){
		var finalCTATL = new TimelineMax();

		var lightsBlink = new TimelineMax({repeat: -1, yoyo: true});
		lightsBlink
			.fromTo($printerLightsTop, 0.1, {fill: '#5AB783'}, {fill:'#F8AD43', immediateRender: false})
			.fromTo($printerLightsBottom, 0.1, {fill: '#5AB783'}, {fill:'#F8AD43', immediateRender: false}, '+=0.1')
			.fromTo($printerLightsTop, 0.1, {fill: '#F8AD43'}, {fill:'#F8876E', immediateRender: false}, '-=0.1')
			.fromTo($printerLightsBottom, 0.1, {fill: '#F8AD43'}, {fill:'#F8876E', immediateRender: false}, '+=0.1')
			.fromTo($printerLightsTop, 0.1, {fill: '#F8876E'}, {fill:'#5AB783', immediateRender: false}, '-=0.1')
			.fromTo($printerLightsBottom, 0.1, {fill: '#F8876E'}, {fill:'#5AB783', immediateRender: false}, '+=0.1');

		var hideAndSeek = new TimelineMax({repeat: -1, repeatDelay: 5});
		hideAndSeek
			.to($paper, 0.4, {y: '+=55', ease:SteppedEase.config(10)})
			.set($paperText, {text: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YES SIR!'})
			.to($paper, 0.4, {y: '-=55', ease:SteppedEase.config(10)})
			.to($paper, 0.4, {y: '+=55', ease:SteppedEase.config(10)}, '+=5')
			.set($paperText, {text: "&nbsp;&nbsp;&nbsp;&nbsp;LET'S GO!"})
			.to($paper, 0.4, {y: '-=55', ease:SteppedEase.config(10)})
			.to($paper, 0.4, {y: '+=55', ease:SteppedEase.config(10)}, '+=5')
			.set($paperText, {text: "&nbsp;START HERE!"})
			.to($paper, 0.4, {y: '-=55', ease:SteppedEase.config(10)});

		finalCTATL
			.fromTo($MainBulb, 0.04, {fill: '#ffffff'}, {fill: '#F8AD43', repeat: 10, yoyo: true})
			.to($h1, 0.2, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, '+=0.2')
			.add(lightsBlink, '2')
			.to($paper, 2.8, {y: 0, ease: SteppedEase.config(10)}, '2')
			.add(hideAndSeek, '7');

		return finalCTATL;
	}

	function init(){

		mainTl
			.add(clearStage())
			.add(getIntroTl(), 'scene-intro')
			.add(getIdeaTl(), 'scene-idea')
			.add(getPart2Tl(), 'scene-part2')
			.add(getFillTubesTl(), 'scene-tubes')
			.add(getFinalCTATl(), 'scene-final');

		//mainTl.seek('scene-final-=2');

	}
	init();

		$(".menu-svg").click(function(){
		$(".menu-svg").toggleClass("cross");
		$(".svg-border").toggleClass("no-border");
	});

	$("div.show-hide-menu").click(function(){
		$("div.menu-list").toggleClass("hide");
		$("div.show-hide-menu").toggleClass("lines");
	});

})(jQuery);




