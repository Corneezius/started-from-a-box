$(document).ready(function() {
	setTimeout(function(){
		$('#rumble-credit').hide(0).fadeIn(1000);
		$('#bgvid2')[0].play();
		$('#bgvid2').show();
	}, 1000);

	setTimeout(function(){
		$('#rumble-credit').fadeOut(1000);
	}, 2000);

	setTimeout(function(){
		$('#bgvid2').hide();
	}, 9000);


	  setTimeout(function(){
			$('#project-title').show();
			// $('#artist-name').show();
			// $('#bars').show();
	  }, 10000);
	//
		setTimeout(function(){
			$('#project-title').hide();
			$('#artist-name').hide();
			$('#bars').hide();
			$('#bgvid2').stop();
		}, 12000);
	//
  setTimeout(function(){
			$('body').removeClass("noscroll");
			$('body').addClass('loaded');
			$('.btn-toggle').show();
			$('nav').show();
		}, 12500);
 });

 $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function(){
    $("#push").click(function(){
        $('html, body').animate({ scrollTop: 0 }, 0);
        $('#bgvid').show();
        $('.navbar-custom').css('background-color','black');
        $('header').css('background','black');
        $('#bgvid')[0].play();

        setTimeout(function(){
      		$('#bgvid').fadeOut(500);
          $('header').css('background','');
          $('.navbar-custom').css('background-color', '');
      		// $('#ninety-six').fadeOut(1000);
      	}, 55000);
    });
});
