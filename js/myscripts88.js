$(document).ready(function() {

	$('#forheader img').click(function() {
		alert('You clicked on the header');
	});
	
	$(window).scroll(function() {
		alert('Scroll is going on');
	});
	
	$('#div_for_img img').click(function() {
		var moto = $(this).clone();
		$('#forresults').append(moto);
	});
	
}); // End of ready 