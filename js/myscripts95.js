$(document).ready(function() {

	$('#checkButton').click(function() {
		alert($('#mytextarea').val()); //can add your parameter
		alert($('#motoSelect').val());
		
		$(':checkbox:checked').each(function() {
			alert($(this).val());
		});
	});
	
}); // End of ready 