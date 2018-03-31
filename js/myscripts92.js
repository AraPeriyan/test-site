$(document).ready(function() {

	$('#small a').click(function(eventObject) {
		$('#big img').hide().attr('src', $(this).attr('href'));
		$('#big img').load(function() {
			$(this).fadeIn(2000);
		});
		
		eventObject.preventDefault();
	});
	
}); // End of ready 