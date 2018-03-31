$(document).ready(function() {

	// The old version working on only JS

	var myMoto = document.getElementById('img_1');
	function motoClick() {
		alert("The width of the photo: " + myMoto.width);
	}
	myMoto.onclick = motoClick;
	
}); // End of ready 