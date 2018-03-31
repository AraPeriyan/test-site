$(document).ready(function() {
	
	var ounVal = $('#email').val();
	$('#email').focus(function() {
		if($(this).val() == ounVal){
			$(this).val('');
		}
	}).blur(function() {
		if($(this).val() == ''){
			$(this).val(ounVal);
		}
	});
	
}); // End of ready 