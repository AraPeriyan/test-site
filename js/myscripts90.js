$(document).ready(function() {

	$('#div_for_img').click(function(eventObject) {
		alert('Cordinats in X line: ' + eventObject.target.id);
	});
	
	/*
		screenX - cordinats of X on window
		screenY - cordinats of Y on window
		pageX - cordinats of X on browser
		pageY - cordinats of Y on browser
		altKey - shows if ALT key was pushed
		ctrlKey - shows if CTRL key was pushed
		shiftKey - shows if SHIFT key was pushed
		target.id - shows on which object was clicked
	*/
	
}); // End of ready 