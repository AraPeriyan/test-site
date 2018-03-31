$(document).ready(function() {

	$('#moto_models li').click(function() {
		$('#moto_table tbody').append('<tr><td>' + $(this).text() + '</td><td></td></tr>');
	});
	
}); // End of ready 