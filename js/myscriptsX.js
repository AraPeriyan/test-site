/*
var mainHeader = document.getElementById('main_h1');
//alert(mainHeader.innerText); for opera, IE
alert(mainHeader.textContent); //for firefox

var myDiv = document.getElementById('div_for_img');
myDiv.innerHTML = "<p><strong>chaging content by new method</strong></p>"
alert(myDiv.innerHTML);
*/


//Lesson 59 - cildNodes, parentNode, nextSibiling, previousSibiling
var myDiv = document.getElementById('div_for_img');
var childDiv = myDiv.childNodes;
for (var i = 0; i < childDiv.length; i++){
    //alert(childDiv[i].alt);
}
var parentDiv = myDiv.parentNode;
var brotherDiv = myDiv.nextSibling;
var brother2Div = myDiv.previousSibling;
alert(brother2Div);


/*
Lesson 58 - getElementsById
var moto = document.getElementById('img_1');
alert(moto.alt);
*/

/*
Lesson 57 - getElementsByTagName
var allImg = document.getElementsByTagName('img');
alert("There are " + allImg.length + " images");
*/