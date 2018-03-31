          Lesson 62
$('p'); //is selecting by tag name

$('#main_h1'); //is selecting by id

$('.maindiv'); //is selecting by class


          Lesson 63
$('p strong');  //is selecting STRONG tag in P tag

$('#main_h1 + p');  //is selecting next P tag after #MAIN_H1

$('#div_for_img > img');  //is selecting all IMG children tags of #DIV_FOR_IMG


         Lesson 64
$('img[width = 200]');  //is selecting tag by atribute
$('a[href ^= http]');  //is selecting tag by atribute which is BEGINING by this parameter
$('img[src $= .jpg]');  //is selecting tag by atribute which is ENDING by this paramater
$('img[src *= moto]');  //is selecting tag by atribute which CONTAINS this parameter


        Homework 64
$('#my_links a[href ^= documents]');
$('#forfooter img[title = Производители]');


        Lesson 65
$('#moto_table tr:odd'); //even or odd is selecting double or not
$('img:not(#div_for_img img)'); //selecting becides that one
$('div:has(fieldset)'); // selecting all DIV's which contains tag FIELDSET
$('p:contains(Мотоцикл)'); //selecting all P tags which contains text Мотоцикл
$('#div_for_img img:first'); //selecting only the first image in the tag
$('#div_for_img img:last'); //selecting only the last image in the tag
$('div:hidden'); //selecting all DIV tags which are hidden
$('div:visibility'); //selecting all DIV tags which are visible


        Lesson 66
$(document).ready(function() {
    
    
}); // End of ready
