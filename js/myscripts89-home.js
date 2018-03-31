$(document).ready(function() {

	$('#my_button').hover(function() {
		$(this).css({
			'backgroundColor' : '#32375D',
			'color' : '#ffffff'
		});
	}, function() {
		$(this).css({
			'backgroundColor' : '#f6f6f6',
			'color' : '#2C2C2C'
		});
	});
	
	$('#moto_table tbody tr').click(function() {
		if($(this).attr('class')){
			$(this).removeClass('light');
		}else{
			$(this).addClass('light');
		}
	});
	
}); // End of ready 