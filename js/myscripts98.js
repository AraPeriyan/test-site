$(document).ready(function() {

	$('#motoSelect').change(function() {
		if($('#motoSelect').val() == 4){
			$('#bag').attr('disabled', 'disabled');
			$('label[for=bag]').css('color', '#cc0000');
		}
		else{
			$('#bag').attr('disabled', false);
			$('label[for=bag]').css('color', '#646464');
		}
	});
	
}); // End of ready 