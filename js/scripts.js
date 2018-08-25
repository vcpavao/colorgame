var numSquares = 6;
var colors = [];
var pickedColor;

//Picks a color to be guessed and adds its RGB values to title text
var colorDisplay = document.getElementById("colorDisplay");

//Sets color of each square to a value in colors and adds an event listener to each
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //Setup mode buttons
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
  //Add click listeners to each circle
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      //Checks if the clicked color is the correct guess
      if(this.style.backgroundColor === pickedColor) {
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "steelblue";
        message.textContent = "Try Again";
      }
    });
  }

  reset();
}


function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  message.textContent = "";
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

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
