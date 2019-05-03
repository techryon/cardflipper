document.addEventListener("DOMContentLoaded", function(event) {
	add_google_logo();
	add_google_logo();
});


function add_google_logo() {
  var src = "./res/images/card-background.png";
  show_image(src, 200,271, "Back of Card");
}


function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  var test = document.getElementById("mainDiv");
  test.appendChild(img);
}


