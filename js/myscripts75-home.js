$(document).ready(function() {

	function changeAttr(id, attrName, value){
		$('#' + id).attr(attrName, value);
	}
	
	changeAttr('img_1', 'height ', '175');
  
}); // End of ready