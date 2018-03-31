$(document).ready(function() {

	$('img[title *= т]').each(function() {
		if($(this).height() < 100 && $(this).height() > 50){
			$(this).css({'border' : '2px solid #cc0000'});
		}
	});
	
}); // End of ready 