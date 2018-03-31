$(document).ready(function() {

	var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
	var ounVal = $('#email').val();
	$('#email').focus(function() {
		if($(this).val() == ounVal){
			$(this).val('');
		}
	}).blur(function() {
		if($(this).val() == ''){
			$(this).val(ounVal);
		}
		else if($(this).val().search(regV) == -1){
			$(this).css({
				'border' : '1px solid #cc0000'
			});
		}
		else{
			$(this).css({
				'border' : '1px solid #00cc00'
			});
		}
	});
	
	$('#my_button').click(function() {
		$(this).attr('disabled', 'disabled');
		$(this).attr('value', 'sending');
	});
	
}); // End of ready 