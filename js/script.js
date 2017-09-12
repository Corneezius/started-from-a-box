$(document).ready(function() {
		$('#rumble-credit').hide(0).fadeIn(1000);

		setTimeout(function(){
			$('#rumble-credit').fadeOut(1000);
		}, 1500);

		// setTimeout(function(){
		// 	$('#bgvid2')[0].play();
		// 	$('#bgvid2').show();
		// }, 2550);
		//
		// setTimeout(function(){
		// 	$('#bgvid2').hide();
		// }, 5500);

		setTimeout(function(){
			$('#project-title').show();
			$('#artist-name').show();
			$('#bars').show();
		}, 3000);

	  setTimeout(function(){
			$('#project-title').hide();
			$('#artist-name').hide();
			$('#bars').hide();
	  }, 6000);

  setTimeout(function(){
			$('body').removeClass("noscroll");
			$('body').addClass('loaded');
			$('.btn-toggle').show();
		}, 6500);
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
