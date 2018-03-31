$(document).ready(function() {

	$('img').each(function() {
		if($(this).width() > 400){
			$(this).fadeOut(3000);
		}
	});

}); // End of ready