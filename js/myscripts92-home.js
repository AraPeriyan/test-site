$(document).ready(function() {

	$('#showGall').click(function() {
		$('#gallery').toggle(1000);
		if($(this).text() == 'Show the gallery'){
			$(this).text('Skip the gallery');
		}
		else{
			$(this).text('Show the gallery');
		}
	});
	

	$('#small a').click(function(eventObject) {	
		$('#small a').removeClass('myBorder');
		$('#small a').fadeTo(500, 1);
		$(this).addClass('myBorder');
		$(this).fadeTo(0, 0.5);
		
		if($('#big img').attr('src') != $(this).attr('href')){
			$('#big img').hide().attr('src', $(this).attr('href'));
		}
		
		$('#big img').load(function() {
			$(this).fadeIn(2000);
		});
		
		eventObject.preventDefault();
	});
	
}); // End of ready 