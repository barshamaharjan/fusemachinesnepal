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
	});

	$("div.show-hide-menu").click(function(){
		$("div.menu-list").toggleClass("hide");
		$("div.show-hide-menu").toggleClass("lines");
	});
});