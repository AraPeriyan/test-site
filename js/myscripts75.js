$(document).ready(function() {

	var footerHt = $('img[src *= footer]').attr('height');
	$('#forresults').text('Height of footer: ' + footerHt);
	
	$('#motoSelect').attr('size', 4);
	
	$('#moto_table').removeAttr('title').attr('title', 'Prices');
  
}); // End of ready