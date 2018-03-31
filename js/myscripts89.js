$(document).ready(function() {
	
	$('#moto_table tbody tr').hover(function() {
		$(this).css({
			'backgroundColor' : '#1F233C',
			'color' : '#ffffff'
		});
	}, function() {
		$(this).css({
			'backgroundColor' : '#ffffff',
			'color' : '#000000'
		});
	});
	
	$('#formHide').click('slow', function() {
		$('#my_form').toggle(1000);
		if($(this).text() == 'Skip the form'){
			$(this).text('Show the form');
		}else{
			$(this).text('Skip the form');
		}
	});
	
}); // End of ready 