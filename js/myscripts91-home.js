$(document).ready(function() {

	$('#my_button').click(function(eventObject) {
		var quest = confirm('Do you confirm the information?');
		
		if(quest == false){
			eventObject.preventDefault();
		}
	});
	
}); // End of ready 