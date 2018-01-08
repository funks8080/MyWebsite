var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var header = document.querySelector("h1");
var colorButton = document.getElementById("colorButton");
var easyButton = document.getElementById("easyButton");
var medButton = document.getElementById("medButton");
var hardButton = document.getElementById("hardButton");
var impButton = document.getElementById("impButton");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

var difficulty = 6;
var colors;
var pickedColor;

Init();

function Init(){
	SetModeButtons();
	SetSquares();
	Refresh();
}

function SetSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				ChangeColors(clickedColor);
				header.style.backgroundColor = clickedColor;
				colorButton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function SetModeButtons(){
	easyButton.addEventListener("click", function(){
		ButtonClicked(1, this);
	});

	medButton.addEventListener("click", function(){
		ButtonClicked(2, this);
	});

	hardButton.addEventListener("click", function(){
		ButtonClicked(3, this);
	});

	impButton.addEventListener("click", function(){
		ButtonClicked(4, this);
	});

	colorButton.addEventListener("click", function(){
		if(difficulty === 12)
			Refresh(true);
		else
			Refresh(false);
		
		header.style.backgroundColor = "steelblue";
		this.textContent = "New Colors";
		messageDisplay.textContent = "";
	});
}

function PickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function GetRandomColors(count){
	var colorArray = new Array();
	for(var i = 0; i < count; i++){
		colorArray.push(RandomColor());		
	}
	return colorArray;
}

function RandomColorValue(){
	return Math.floor(Math.random() * 256);
}

function RandomColor(){
	var red = RandomColorValue();
	var green = RandomColorValue();
	var blue = RandomColorValue();
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function ChangeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function Refresh(impMode){
	if(!impMode)
		colors = GetRandomColors(difficulty);
	else
		colors = GetImpColors();
	//remove unnecessary squares
	for(var i = difficulty; i < squares.length; i++){
		squares[i].style.display = "none";
	};
	//add necessary squares
	for(var i = 3; i < difficulty; i++){
		squares[i].style.display = "block";
	};
	//gives squares their color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//pick desired square
	pickedColor = PickColor();
	//set color display value in header
	colorDisplay.textContent = pickedColor;
	//reset header color
	header.style.backgroundColor = "steelblue";
	//reset color button title
	colorButton.textContent = "New Colors";
	//reset alert
	messageDisplay.textContent = "";
	
}

function ButtonClicked(diff, button){
	difficulty = diff*3;
	easyButton.classList.remove("selected");
	medButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	impButton.classList.remove("selected");
	button.classList.add("selected");

	if(diff === 4)
		Refresh(true);
	else
		Refresh(false);
}

function GetImpColors(){
	var baseColors = [RandomColorValue(), RandomColorValue(), RandomColorValue()];

	var colorVar = Math.floor(Math.random() * 3);
	var colors = [];
		colors.push("rgb(" + baseColors[0] + ", " + baseColors[1] + ", " + baseColors[2] + ")");

	if(baseColors[colorVar] + 110 <= 255){
		if(colorVar === 0){
			for(var i = 1; i < difficulty; i++){
				colors.push("rgb(" + (baseColors[0] + 10 * i) + ", " + baseColors[1] + ", " + baseColors[2] + ")")
			}
		}
		else if(colorVar === 1){
			for(var i = 1; i < difficulty; i++){
				colors.push("rgb(" + baseColors[0] + ", " + (baseColors[1] + 10 * i) + ", " + baseColors[2] + ")")
			}
		}
		else{
			for(var i = 1; i < difficulty; i++){
				colors.push("rgb(" + baseColors[0] + ", " + baseColors[1] + ", " + (baseColors[2] + 10 * i) + ")")
			}
		}
	}
	else{
		if(colorVar === 0){
			for(var i = 1; i < difficulty; i++){
				colors.push("rgb(" + (baseColors[0] - 10 * i) + ", " + baseColors[1] + ", " + baseColors[2] + ")")
			}
		}
		else if(colorVar === 1){
			for(var i = 1; i < difficulty; i++){
				colors.push("rgb(" + baseColors[0] + ", " + (baseColors[1] - 10 * i) + ", " + baseColors[2] + ")")
			}
		}
		else{
			for(var i = 1; i < difficulty; i++){
				colors.push("rgb(" + baseColors[0] + ", " + baseColors[1] + ", " + (baseColors[2] - 10 * i) + ")")
			}
		}
	}
	return colors;
	
}