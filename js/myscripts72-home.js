$(document).ready(function() {
 
    function outElement(id, time){
        if(isNaN(time)){
            alert('Please input valid time');
        }
        else if(time >= 500 && time <= 10000){
            $('#' + id).fadeOut(time);                
        }
        else{
            alert('Time must be between 500 & 10000');
            return false;
        }        
    } 
    
    outElement('main_h1', 5000);  
  
}); // End of ready