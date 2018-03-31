$(document).ready(function() {
    
    var textSize = $('#main_h1').css('font-size');
    alert(textSize);
    
    $('#main_h1').css('color', '#3F4078');
    
    $('#div_for_img + p').css({
        'border':'1px solid #333333', 
        'background-color':'#E4D7E8'
    });
  
}); // End of ready