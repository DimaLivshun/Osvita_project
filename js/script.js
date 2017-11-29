$(document).ready(function() {


	//hamburger
	$(".hide_button").click(function(){
		$("#main_nav").slideToggle();
	});





	/*$("#dd1").click(function(){
		$(".inbutton1").slideToggle();
	});
	$("#dd2").click(function(){
		$(".inbutton2").slideToggle();
	});*/

	$(window).resize(function() {
	    width = $(window).width();
	    if (width <= 992) {
	        $(".dropped-button1").click(function(){
				$(".inbutton1").slideToggle();
			});
			$(".dropped-button2").click(function(){
				$(".inbutton2").slideToggle();
			});
	    }
	});
});