$(document).ready(function() {

	var myDiv = $('#div_for_img').css({'border' : '2px solid #cc0000'});
	myDiv.before('<p>Made by new method BEFORE()</p>');
	myDiv.after('<p>Made by new method AFTER()</p>');
	myDiv.prepend('<p>Made by new method PREPEND()</p>');
	myDiv.append('<p>Made by new method APPEND()</p>');
  
}); // End of ready