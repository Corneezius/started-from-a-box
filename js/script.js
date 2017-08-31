$(document).ready(function() {
		$('#rumble-credit').hide(0).fadeIn(1000);
		$('#bgvid2')[0].play();

		setTimeout(function(){
			$('#rumble-credit').fadeOut(1000);
		}, 1500);

		setTimeout(function(){
			$('#bgvid2').show();
		}, 2550);

		setTimeout(function(){
			$('#bgvid2').hide();
		}, 5900);

		setTimeout(function(){
			$('#project-title').show();
			$('#artist-name').show();
			$('#bars').show();
		}, 6000);

	  // setTimeout(function(){
		// 	$('#project-title').hide();
		// 	$('#artist-name').hide();
	  // }, 6000);

	// 	//
  // setTimeout(function(){
	// 	  $('body').addClass('loaded');
	// 		$('body').removeClass("noscroll");
	// 	}, 6400);
 });
