
//Creating a new array to store the face images in the deck of card
var faceCardsArray = new Array(); 

//AddEventListener to DOMContentLoaded, so the image waits to load
//after the page is loaded

document.addEventListener("DOMContentLoaded", function(event) {
	onload_image();

  //The array has been created so its available in the memory during the game
  for (var faceCard=0; faceCard<=51; faceCard++){
    faceCardsArray[faceCard] = new Image(); //Every element of the array is defined as a new image
    faceCardsArray[faceCard].src = "./res/images/face/" + faceCard + ".png"; //every element source has been set

  }
 /* var testimage = document.getElementById("Test");
  var element = Math.floor((Math.random() * 52) + 0);
  testimage.src = faceCardsArray[element].src;
  */
 
});
console.log(faceCardsArray);

//Capturing which card has been Clicked
//And its details has been passed on 
var cardOne = document.getElementById("cardOne");
cardOne.onclick = function() {
//  var getChildImageTag = cardOne.getElementsByTagName("img");
//  var getChildImageId = getChildImageTag[0].id;
  
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
  var randomElement = Math.floor((Math.random() * 52) + 0);
  var src = faceCardsArray[randomElement].src;
  var img = parent.children[0];
  img.src = src;

}

