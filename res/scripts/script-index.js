
//Creating a new array to store the face images in the deck of card
var faceCardsArray = new Array(); 

//Creating Two random values to use while switching cards
var randomOne = Math.floor((Math.random() * 52) + 0);
var randomTwo = Math.floor((Math.random() * 52) + 0);

//AddEventListener to DOMContentLoaded, so the image waits to load
//after the page is loaded

document.addEventListener("DOMContentLoaded", function(event) {
	onload_image();

  //The array has been created so its available in the memory during the game
  for (var faceCard=0; faceCard<=51; faceCard++){
    faceCardsArray[faceCard] = new Image(); //Every element of the array is defined as a new image
    faceCardsArray[faceCard].src = "./res/images/face/" + faceCard + ".png"; //every element source has been set

  }
 
});


//Capturing which card has been Clicked
//And it's id has been passed on 
var cardOne = document.getElementById("displayingImage1");
cardOne.onclick = function () {
  changeImage(cardOne, randomOne);
  //cardOne.alt = "true";
  this.onclick = null;
  //compare();
  
}


var cardTwo = document.getElementById("displayingImage2");
cardTwo.onclick = function () {
  changeImage(cardTwo, randomTwo);
  //cardTwo.alt = "true";
  this.onclick = null;
  //compare();
  
}


//Reset button to reset the images back to start
var reset = document.getElementById("reset");
reset.onclick = function() {
  window.location.reload();

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
//This function takes id of the img and set the source attribute with changed image

function changeImage(idimage, randomValue){
  //var randomElement = Math.floor((Math.random() * 52) + 0);
  src = faceCardsArray[randomValue].src;
  idimage.setAttribute("src", src);
  console.log(src);

}




