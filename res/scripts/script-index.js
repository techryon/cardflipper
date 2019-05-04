//AddEventListener to DOMContentLoaded, so the image waits to load
//after the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {
	onload_image();
  
});

var cardOne = document.getElementById("cardOne");
cardOne.onclick = function() {
  changeImage(cardOne);
}

var cardTwo = document.getElementById("cardTwo");
cardTwo.onclick = function() {
  changeImage(cardTwo);
}


var reset = document.getElementById("reset");
reset.onclick = function() {
  onload_image();
}

//Function to load both the default images. Looping it so it loads the same image twice
//This function gets the image using Id and adds the source attributes 
function onload_image() {
  for(var defaultImage=1; defaultImage<=2; defaultImage++){
    var src = "./res/images/card-background.png";
    var img = document.getElementById("displayingImage" + defaultImage);
    img.src = src;
    
  }
}





//Function to flip the card and display the changed image.
//This function check which parent tag is clicked and change image on its child
function changeImage(parent){
  var src = "./res/images/front-Spade-A.png";
  var img = parent.children[0];
  img.src = src;

}

