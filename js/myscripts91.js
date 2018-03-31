$(document).ready(function() {

	$('#superlink').click(function(eventObject) {
		eventObject.preventDefault();
		//return false; - Works too, but stops code after it
		$('#forresults').append('<p>New method used</p>');
	});
	
}); // End of ready 