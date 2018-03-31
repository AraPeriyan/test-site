$(document).ready(function() {

	$('#my_form').submit(function(eventObject) {
		if($('#email').val() == ""){
			eventObject.preventDefault();
			alert('Please input email!');
		}
	});
	
	$('#email').focus(function() {
		$(this).css({
			'border' : '2px solid green',
			'background-color' : '#f6f6f6'
		});
	});
	
}); // End of ready 