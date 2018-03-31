$(document).ready(function() {

	$('#div_for_img').css({'border' : '2px solid #cc0000'}).animate({'width' : '450px'}, 4000, function() {
		alert('It\'s ready');
	});
	
	$('#main_h1').css({'border' : '2px solid #cc0000'}).animate({'paddingTop' : '70px'}, 4000);
  
}); // End of ready