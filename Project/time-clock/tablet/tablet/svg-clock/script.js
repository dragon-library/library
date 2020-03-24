$(function() {

	var d = new Date();

	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	var EASE = {
		"elastic_1": Elastic.easeOut.config(1.2, 0.75)

	}

	var EL = {

		"circle_1": {
			$svg: $('#circle_1'),
			start: 0,
			ease: EASE.elastic_1
		},

		"circle_2": {
			$svg: $('#circle_2'),
			start: .2,
			ease: EASE.elastic_1
		},

		"circle_3": {
			$svg: $('#circle_3'),
			start: .4,
			ease: EASE.elastic_1
		},

		"circle_4": {
			$svg: $('#circle_4'),
			start: .6,
			ease: EASE.elastic_1
		},

		"outline_1": {
			$svg: $('#outline_1'),
			start: .7,
			ease: EASE.elastic_1
		},

		"circle_5": {
			$svg: $('#circle_5'),
			start: .8,
			ease: EASE.elastic_1
		},

		"line_1": {
			$svg: $('#line_1'),
			start: .8,
			ease: EASE.elastic_1
		},

		"line_2": {
			$svg: $('#line_2'),
			start: .8,
			ease: EASE.elastic_1
		},

		"number_6": {
			$svg: $('#number-6'),
			start: .8,
			ease: EASE.elastic_1
		},

		"number_12": {
			$svg: $('#number-12'),
			start: .8,
			ease: EASE.elastic_1
		},

		"number_3": {
			$svg: $('#number-3'),
			start: .8,
			ease: EASE.elastic_1
		},

		"number_9": {
			$svg: $('#number-9'),
			start: .8,
			ease: EASE.elastic_1
		},

		"lancet_red": {
			$svg: $('#lancet_red'),
			start: .8,
			ease: EASE.elastic_1
		}

	}

	/* TIMELINE
	_______________________________________________________ */

	var tl = new TimelineMax({
		repeat: 0,
		delay: 0,
		yoyo: false,
		paused: false,
		onReverseComplete: function() {
			$('#reverse').removeClass('blink');
			$('#start').trigger('click');
		}
	});

	tl.timeScale(1)

	tl.set(EL.line_1.$svg, {
		"stroke-dashoffset": -280
	});
	tl.set(EL.line_2.$svg, {
		"stroke-dashoffset": -280
	});

	tl.set(EL.number_6.$svg, {
		alpha: 0,
		"top": "63%"
	});
	tl.set(EL.number_12.$svg, {
		alpha: 0,
		"top": "30%"
	});

	tl.set(EL.number_3.$svg, {
		alpha: 0,
		"left": "30%"
	});
	tl.set(EL.number_9.$svg, {
		alpha: 0,
		"right": "30%"
	});

	tl.set("#circle_clip_element", {
		attr: {
			r: 0
		}
	});

	tl.set('#lancet_ss', {
		alpha: 0
	})
	tl.set('#lancet_mm', {
		alpha: 0
	})
	tl.set('#lancet_hh', {
		alpha: 0
	})

	tl
	// circle_1
		.to(EL.circle_1.$svg, 0.7, {
		attr: {
			r: 175
		},
		ease: Elastic.easeOut.config(1.2, 0.75),
		y: 0
	}, EL.circle_1.start)

	// circle_2
	.to(EL.circle_2.$svg, 1, {
		attr: {
			r: 175
		},
		ease: Elastic.easeOut.config(0.4, 0.75),
		y: 0
	}, EL.circle_2.start)

	// circle_3
	.to(EL.circle_3.$svg, 1, {
		attr: {
			r: 175
		},
		ease: Elastic.easeOut.config(0.4, 0.75),
		y: 0
	}, EL.circle_3.start)

	// circle_4
	.to(EL.circle_4.$svg, 1, {
		attr: {
			r: 175
		},
		ease: Elastic.easeOut.config(0.4, 0.75),
		y: 0
	}, EL.circle_4.start)

	// outline
	.to(EL.outline_1.$svg, .1, {
			"opacity": 1
		}, .6)
		.to(EL.outline_1.$svg, 1, {
			rotation: -100,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		}, .6)
		.to(EL.outline_1.$svg, .7, {
			"stroke-dashoffset": 2000,
			ease: Power1.easeOut
		}, EL.outline_1.start)
		.to(EL.outline_1.$svg, 1, {
			rotation: -100,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		}, .6)

	// circle_5
	.to(EL.circle_5.$svg, 1, {
		attr: {
			r: 156
		},
		ease: Elastic.easeOut.config(0.4, 0.75),
		y: 0
	}, EL.circle_5.start)

	// line_1
	.to(EL.line_1.$svg, .8, {
			"stroke-dashoffset": 0,
			ease: Expo.easeInOut
		}, .8)
		.to(EL.line_1.$svg, 1, {
			rotation: -90,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		}, EL.circle_5.start)

	// line_2
	.to(EL.line_2.$svg, 1, {
			"stroke-dashoffset": 0,
			ease: Expo.easeInOut
		}, .8)
		.to(EL.line_2.$svg, 1, {
			rotation: -90,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		}, .6)

	.to(EL.line_1.$svg, 1, {
			"stroke-dashoffset": 1010,
			ease: Expo.easeInOut
		}, .8)
		.to(EL.line_2.$svg, .8, {
			"stroke-dashoffset": 1010,
			ease: Expo.easeInOut
		}, 1)

	// clock numbers
	.to(EL.number_6.$svg, .4, {
			alpha: 1,
			"top": "67%",
			ease: Power1.easeOut
		}, 1.2)
		.to(EL.number_12.$svg, .4, {
			alpha: 1,
			"top": "28%",
			ease: Power1.easeOut
		}, 1.2)

	.to(EL.number_3.$svg, .4, {
			alpha: 1,
			"left": "29%",
			ease: Power1.easeOut
		}, 1.3)
		.to(EL.number_9.$svg, .4, {
			alpha: 1,
			"right": "28%",
			ease: Power1.easeOut
		}, 1.4)

	.to("#circle_clip_element", 1, {
		attr: {
			r: 156
		},
		ease: Power1.easeOut
	}, 1)

	.to('#lancet_ss', .3, {
			alpha: 1
		})
		.to('#lancet_mm', .6, {
			alpha: 1
		})
		.to('#lancet_hh', .7, {
			alpha: 1
		})

	/* REALTIME CLOCK
	_______________________________________________________ */

	setInterval(function() {

		var currentTime = new Date();

		var hour_as_degree = (currentTime.getHours() + currentTime.getMinutes() /
			60) / 12 * 360;
		var minute_as_degree = currentTime.getMinutes() / 60 * 360;

		seconds++;
		var second_as_degree = (seconds) / 60 * 360;

		TweenMax.to('#lancet_ss', 1, {
			rotation: second_as_degree,
			transformOrigin: "100% 100%",
			ease: Elastic.easeInOut
		})
		TweenMax.to('#lancet_mm', 1, {
			rotation: minute_as_degree,
			transformOrigin: "100% 100%",
			ease: Elastic.easeInOut
		})
		TweenMax.to('#lancet_hh', 1, {
			rotation: hour_as_degree,
			transformOrigin: "100% 100%",
			ease: Elastic.easeInOut
		})

	}, 1000)

	/* CLICK EVENT BUTTON
	_______________________________________________________ */

	$('#start').on('click', function() {
		tl.restart();
	})

	$('#reverse').on('click', function() {
		tl.reverse();
		$(this).addClass('blink');

	})

});