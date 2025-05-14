$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10').stop();
			$('#b11').animate({top:240, left: vw-450},500);
			$('#b22').animate({top:240, left: vw-350},500);
			$('#b33').animate({top:240, left: vw-250},500);
			$('#b44').animate({top:240, left: vw-150},500);
			$('#b55').animate({top:240, left: vw-50},500);
			$('#b66').animate({top:240, left: vw+50},500);
			$('#b77').animate({top:240, left: vw+150},500);
			$('#b88').animate({top:240, left: vw+250},500);
			$('#b99').animate({top:240, left: vw+350},500);
			$('#b1010').animate({top:240, left: vw+450},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow');
		
		// Wait for the banner-come animation to complete (6 seconds) then fade out
		setTimeout(function() {
			$('.bannar').addClass('bannar-fade-out');
			
			// After fade out animation completes (2 seconds), remove the banner element
			setTimeout(function() {
				$('.bannar').parent().parent().remove(); // Remove the entire row containing the banner
			}, 2000);
		}, 6000);
		
		// Wait for both animations to complete (8 seconds total) before showing next button
		setTimeout(function() {
			$('#balloons_flying').fadeIn('slow');
		}, 8000);
	});

	function loopBalloon(id) {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#' + id).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopBalloon(id);
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		for (let i = 1; i <= 11; i++) {
			loopBalloon('b' + i);
		}
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		var vw = $(window).width() / 2;
		for (let i = 1; i <= 11; i++) {
			$('#b' + i).stop().animate({ top: 240, left: vw - 500 + (i - 1) * 100 }, 500);
		}
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.balloons h2').fadeOut('slow');   // Fade out the ANNIVERSARY letters
		$('.balloons').fadeOut('slow');      // Fade out the balloons themselves
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');