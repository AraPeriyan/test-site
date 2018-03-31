$(document).ready(function() {

	$('#moto_table tbody tr').mouseover(function() {
		$(this).css({
			'backgroundColor' : '#1F233C',
			'color' : '#ffffff'
		});
	});
	
	$('#moto_table tbody tr').mouseout(function() {
		$(this).css({
			'backgroundColor' : '#ffffff',
			'color' : '#000000'
		});
	});
	
}); // End of ready 