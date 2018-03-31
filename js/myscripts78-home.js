$(document).ready(function() {

	$('img[src *= moto2]').css('border', '1px solid #333333').animate({'borderWidth' : '5px'}, 5000, function() {
		$('img[src *= logo]').fadeOut(5000);
	});
  
}); // End of ready