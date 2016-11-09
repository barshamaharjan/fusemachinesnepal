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
		// var controller = new ScrollMagic.Controller();

		// pin the intro
		// var pinIntroScene = new ScrollMagic.Scene({
		// 	triggerElement: '#intro',
		// 	triggerHook: 0,
		// 	duration: '40%'
		// })
		// .setPin('#intro', {pushFollowers: false})
		// .addTo(controller);


		//pin again
		// var pinIntroScene2 = new ScrollMagic.Scene({
		// 	triggerElement: '#project01',
		// 	triggerHook: 0.4
		// })
		// .setPin('#intro', {pushFollowers: false})
		// .addTo(controller);

		//pin project5
		// var pinproject04 = new ScrollMagic.Scene({
		// 	triggerElement: '#project04',
		// 	triggerHook: 0,
		// 	duration:'30%'
		// })
		// .setPin('#project04')
		// .addTo(controller);

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

	$(".menu-svg").click(function(){
		$(".menu-svg").toggleClass("cross");
		$(".svg-border").toggleClass("no-border");
	});

	$("div.show-hide-menu").click(function(){
		$("div.menu-list").toggleClass("hide");
		$("div.show-hide-menu").toggleClass("lines");
	});



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