$(document).ready(function() {

	$('#email').focus(function() {
		$(this).addClass('onFocus');
	}).blur(function() {
		$(this).removeClass('onFocus');
	});
	
	$('#motoSelect').change(function() {
		var myChoice = $('#motoSelect').val();
		if(myChoice == 1){
			$('#daysSelect').html('<option value="1">1</option><option value="2">2</option>');
		}
		else if(myChoice == 2){
			$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>');
		}
		else if(myChoice == 3){
			$('#daysSelect').html('<option value="1">1</option>');
		}
		else{
			$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option>');
		}
	});
	
}); // End of ready 