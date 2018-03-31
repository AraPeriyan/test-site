$(document).ready(function() {

var textH1 = $('#main_h1').text();
alert(textH1);
$('#main_h1').text('Ara Periyan');

var myLogo = $('img[src *= logo]');
myLogo.hide(3000); //3000 shows that it will hide in 3 seconds
myLogo.show(3000);
    
    
}); // End of ready


