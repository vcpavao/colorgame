var colors = generateRandomColors(6);

//Picks a color to be guessed and adds its RGB values to title text
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

//Sets color of each square to a value in colors and adds an event listener to each
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    //Checks if the clicked color is the correct guess
    if(this.style.backgroundColor === pickedColor) {
      message.textContent = "Correct!";
      changeColors(pickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//Returns colors at a random index (some random color)
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num) {
  var arr = []
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  //Return string in RGB format
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
