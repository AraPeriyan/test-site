$(document).ready(function() {

	var myDiv = $('#div_for_img').clone();
	$('#my_form').after(myDiv);
	
	var myFooter = $('#forfooter').remove();
	$('#moto_table').before(myFooter);
	
}); // End of ready 