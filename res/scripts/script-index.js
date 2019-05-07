//Capturing which card has been Clicked
//And its details has been passed on 
var cardOne = document.getElementById("cardOne");
cardOne.onclick = function() {
//  var getChildImageTag = cardOne.getElementsByTagName("img");
//  var getChildImageId = getChildImageTag[0].id;
  
  changeImage(cardOne);
}

var cardOne = document.getElementById("cardOne");
cardOne.onclick = function() {
  changeImage(cardOne);
}

var cardTwo = document.getElementById("cardTwo");
cardTwo.onclick = function() {
  changeImage(cardTwo);
}

//Reset button to reset the images back to start
var reset = document.getElementById("reset");
reset.onclick = function() {
  onload_image();
}
