$(document).ready(function() {

    function elementSize(id){
        $('#forresults').text('Width is: ' + $('#' + id).width() + ', Height is: ' + $('#' + id).height());
    }

    elementSize('img_1');  
}); // End of ready

