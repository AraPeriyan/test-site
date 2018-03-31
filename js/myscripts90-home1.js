$(document).ready(function() {

	$('#div_for_img img').click(function(eventObject) {
		if(eventObject.shiftKey){
			var borderColor = '#cc0000';
		}
		else{
			var borderColor = '#333333';
		}
		
		if($(this).attr('class')){
			$(this).removeClass('myBorder');
			$(this).css({'border' : 'none'});
		}
		else{
			$(this).addClass('myBorder');
			$(this).css({'border' : '4px solid' + borderColor});
		}
	});
	
}); // End of ready 