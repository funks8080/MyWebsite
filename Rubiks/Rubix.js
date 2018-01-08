var moveUp = document.getElementById("moveUp");
var moveDown = document.getElementById("moveDown");
var moveLeft = document.getElementById("moveLeft");
var moveRight = document.getElementById("moveRight");

var topLeft = document.getElementById("topLeft");
var topCenter = document.getElementById("topCenter");
var topRight = document.getElementById("topRight");
var leftTop = document.getElementById("leftTop");
var leftCenter = document.getElementById("leftCenter");
var leftBottom = document.getElementById("leftBottom");
var rightTop = document.getElementById("rightTop");
var rightCenter = document.getElementById("rightCenter");
var rightBottom = document.getElementById("rightBottom");
var bottomLeft = document.getElementById("bottomLeft");
var bottomCenter = document.getElementById("bottomCenter");
var bottomRight = document.getElementById("bottomRight");
var squares = document.querySelectorAll(".square");
var miniTopFaceSquares = document.querySelectorAll(".miniTopFace");
var miniBottomFaceSquares = document.querySelectorAll(".miniBottomFace");
var miniLeftFaceSquares = document.querySelectorAll(".miniLeftFace");
var miniRightFaceSquares = document.querySelectorAll(".miniRightFace");
var miniBackFaceSquares = document.querySelectorAll(".miniBackFace");

var topFace = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
];

var bottomFace = [
	[1,1,1],
	[1,1,1],
	[1,1,1]
];

var leftFace = [
	[2,2,2],
	[2,2,2],
	[2,2,2]
];

var rightFace = [
	[3,3,3],
	[3,3,3],
	[3,3,3]
];

var backFace = [
	[4,4,4],
	[4,4,4],
	[4,4,4]
];

var frontFace = [
	[5,5,5],
	[5,5,5],
	[5,5,5]
];


init();

//Whole Cube Movements
moveUp.addEventListener("click", function(){
	MoveUp();
	ReColor();
});

moveDown.addEventListener("click", function(){
	MoveDown();
	ReColor();
})

moveLeft.addEventListener("click", function(){
	MoveLeft();
	ReColor();
});

moveRight.addEventListener("click", function(){
	MoveRight();
	ReColor();
});

//Top Movements
topLeft.addEventListener("click", function(){
	var blank = frontFace.map(function(value,index) { return value[0]; });
	var column = bottomFace.map(function(value,index) { return value[0]; });
	frontFace[0][0] = column [0];
	frontFace[1][0] = column [1];
	frontFace[2][0] = column [2];
	column = backFace.map(function(value,index) { return value[0]; });
	bottomFace[0][0] = column[0];
	bottomFace[1][0] = column[1];
	bottomFace[2][0] = column[2];
	column = topFace.map(function(value,index) { return value[0]; });
	backFace[0][0] = column[0];
	backFace[1][0] = column[1];
	backFace[2][0] = column[2];

	topFace[0][0] = blank[0];
	topFace[1][0] = blank[1];
	topFace[2][0] = blank[2];

	LeftFaceUp();
	ReColor();
});

topCenter.addEventListener("click", function(){
	var blank = frontFace.map(function(value,index) { return value[1]; });
	var column = bottomFace.map(function(value,index) { return value[1]; });
	frontFace[0][1] = column [0];
	frontFace[1][1] = column [1];
	frontFace[2][1] = column [2];
	column = backFace.map(function(value,index) { return value[1]; });
	bottomFace[0][1] = column[0];
	bottomFace[1][1] = column[1];
	bottomFace[2][1] = column[2];
	column = topFace.map(function(value,index) { return value[1]; });
	backFace[0][1] = column[0];
	backFace[1][1] = column[1];
	backFace[2][1] = column[2];

	topFace[0][1] = blank[0];
	topFace[1][1] = blank[1];
	topFace[2][1] = blank[2];

	LeftFaceUp();
	ReColor();
});

topRight.addEventListener("click", function(){
	var blank = frontFace.map(function(value,index) { return value[2]; });
	var column = bottomFace.map(function(value,index) { return value[2]; });
	frontFace[0][2] = column [0];
	frontFace[1][2] = column [1];
	frontFace[2][2] = column [2];
	column = backFace.map(function(value,index) { return value[2]; });
	bottomFace[0][2] = column[0];
	bottomFace[1][2] = column[1];
	bottomFace[2][2] = column[2];
	column = topFace.map(function(value,index) { return value[2]; });
	backFace[0][2] = column[0];
	backFace[1][2] = column[1];
	backFace[2][2] = column[2];

	topFace[0][2] = blank[0];
	topFace[1][2] = blank[1];
	topFace[2][2] = blank[2];

	RightFaceUp();
	ReColor();
});

//Bottom Movements
bottomLeft.addEventListener("click", function(){
	var blank = frontFace.map(function(value,index) { return value[0]; });
	var column = topFace.map(function(value,index) { return value[0]; });
	frontFace[0][0] = column [0];
	frontFace[1][0] = column [1];
	frontFace[2][0] = column [2];
	column = backFace.map(function(value,index) { return value[0]; });
	topFace[0][0] = column[0];
	topFace[1][0] = column[1];
	topFace[2][0] = column[2];
	column = bottomFace.map(function(value,index) { return value[0]; });
	backFace[0][0] = column[0];
	backFace[1][0] = column[1];
	backFace[2][0] = column[2];

	bottomFace[0][0] = blank[0];
	bottomFace[1][0] = blank[1];
	bottomFace[2][0] = blank[2];

	LeftFaceDown();
	ReColor();
});

bottomCenter.addEventListener("click", function(){
	var blank = frontFace.map(function(value,index) { return value[1]; });
	var column = topFace.map(function(value,index) { return value[1]; });
	frontFace[0][1] = column [0];
	frontFace[1][1] = column [1];
	frontFace[2][1] = column [2];
	column = backFace.map(function(value,index) { return value[1]; });
	topFace[0][1] = column[0];
	topFace[1][1] = column[1];
	topFace[2][1] = column[2];
	column = bottomFace.map(function(value,index) { return value[1]; });
	backFace[0][1] = column[0];
	backFace[1][1] = column[1];
	backFace[2][1] = column[2];

	bottomFace[0][1] = blank[0];
	bottomFace[1][1] = blank[1];
	bottomFace[2][1] = blank[2];

	ReColor();
});

bottomRight.addEventListener("click", function(){
	var blank = frontFace.map(function(value,index) { return value[2]; });
	var column = topFace.map(function(value,index) { return value[2]; });
	frontFace[0][2] = column [0];
	frontFace[1][2] = column [1];
	frontFace[2][2] = column [2];
	column = backFace.map(function(value,index) { return value[2]; });
	topFace[0][2] = column[0];
	topFace[1][2] = column[1];
	topFace[2][2] = column[2];
	column = bottomFace.map(function(value,index) { return value[2]; });
	backFace[0][2] = column[0];
	backFace[1][2] = column[1];
	backFace[2][2] = column[2];

	bottomFace[0][2] = blank[0];
	bottomFace[1][2] = blank[1];
	bottomFace[2][2] = blank[2];

	RightFaceDown();
	ReColor();
});

//Left Movements
leftTop.addEventListener("click", function(){
	var blank = frontFace[0].slice();
	frontFace[0] = rightFace[0];
	rightFace[0] = backFace[0];
	backFace[0] = leftFace[0];
	leftFace[0] = blank;

	TopFaceLeft();
	ReColor();
});

leftCenter.addEventListener("click", function(){
	var blank = frontFace[1].slice();
	frontFace[1] = rightFace[1];
	rightFace[1] = backFace[1];
	backFace[1] = leftFace[1];
	leftFace[1] = blank;

	ReColor();
});

leftBottom.addEventListener("click", function(){
	var blank = frontFace[2].slice();
	frontFace[2] = rightFace[2];
	rightFace[2] = backFace[2];
	backFace[2] = leftFace[2];
	leftFace[2] = blank;

	BottomFaceLeft()
	ReColor();
});

//Right Movements
rightTop.addEventListener("click", function(){
	var blank = frontFace[0].slice();
	frontFace[0] = leftFace[0];
	leftFace[0] = backFace[0];
	backFace[0] = rightFace[0];
	rightFace[0] = blank;

	TopFaceRight();
	ReColor();
});

rightCenter.addEventListener("click", function(){
	var blank = frontFace[1].slice();
	frontFace[1] = leftFace[1];
	leftFace[1] = backFace[1];
	backFace[1] = rightFace[1];
	rightFace[1] = blank;

	ReColor();
});

rightBottom.addEventListener("click", function(){
	var blank = frontFace[2].slice();
	frontFace[2] = leftFace[2];
	leftFace[2] = backFace[2];
	backFace[2] = rightFace[2];
	rightFace[2] = blank;

	BottomFaceRight()
	ReColor();
});

function ReColor(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = GetColor(i, frontFace);
		miniTopFaceSquares[i].style.backgroundColor = GetColor(i, topFace);
		miniBottomFaceSquares[i].style.backgroundColor = GetColor(i, bottomFace);
		miniLeftFaceSquares[i].style.backgroundColor = GetColor(i, leftFace);
		miniRightFaceSquares[i].style.backgroundColor = GetColor(i, rightFace);
		miniBackFaceSquares[i].style.backgroundColor = GetColor(i, backFace);
	}
}

function GetColor(int, array){
	var color = "";
	var square = 0;
	switch(int){
		case 0:
			square = array[0][0];
			break;
		case 1:
			square = array[0][1];
			break;
		case 2:
			square = array[0][2];
			break;
		case 3:
			square = array[1][0];
			break;
		case 4:
			square = array[1][1];
			break;
		case 5:
			square = array[1][2];
			break;
		case 6:
			square = array[2][0];
			break;
		case 7:
			square = array[2][1];
			break;
		case 8:
			square = array[2][2];
			break;
	}
	switch(square){
		case 0:
			color = "white";
			break;
		case 1:
			color = "yellow";
			break;
		case 2:
			color = "green";
			break;
		case 3:
			color = "blue";
			break;
		case 4:
			color = "orange";
			break;
		case 5:
			color = "red";
			break;
	}
	return color;
}

function init(){
	ReColor();
}

function log(string){
	console.log(string);
}

function LeftFaceUp(){
	var blank = JSON.parse(JSON.stringify(leftFace));
	leftFace[0][0] = blank[0][2];
	leftFace[0][1] = blank[1][2];
	leftFace[0][2] = blank[2][2];

	leftFace[1][0] = blank[0][1];
	leftFace[1][2] = blank[2][1];

	leftFace[2][0] = blank[0][0];
	leftFace[2][1] = blank[1][0];
	leftFace[2][2] = blank[2][0];
}

function LeftFaceDown(){
	var blank = JSON.parse(JSON.stringify(leftFace));
	leftFace[0][0] = blank[2][0];
	leftFace[0][1] = blank[1][0];
	leftFace[0][2] = blank[0][0];

	leftFace[1][0] = blank[2][1];
	leftFace[1][2] = blank[0][1];

	leftFace[2][0] = blank[2][2];
	leftFace[2][1] = blank[1][2];
	leftFace[2][2] = blank[0][2];
}

function RightFaceUp(){
	var blank = JSON.parse(JSON.stringify(rightFace));
	rightFace[0][0] = blank[2][0];
	rightFace[0][1] = blank[1][0];
	rightFace[0][2] = blank[0][0];

	rightFace[1][0] = blank[2][1];
	rightFace[1][2] = blank[0][1];

	rightFace[2][0] = blank[2][2];
	rightFace[2][1] = blank[1][2];
	rightFace[2][2] = blank[0][2];
}

function RightFaceDown(){
	var blank = JSON.parse(JSON.stringify(rightFace));
	rightFace[0][0] = blank[0][2];
	rightFace[0][1] = blank[1][2];
	rightFace[0][2] = blank[2][2];

	rightFace[1][0] = blank[0][1];
	rightFace[1][2] = blank[2][1];

	rightFace[2][0] = blank[0][0];
	rightFace[2][1] = blank[1][0];
	rightFace[2][2] = blank[2][0];
}

function TopFaceLeft(){
	var blank = JSON.parse(JSON.stringify(topFace));
	topFace[0][0] = blank[2][0];
	topFace[0][1] = blank[1][0];
	topFace[0][2] = blank[0][0];

	topFace[1][0] = blank[2][1];
	topFace[1][2] = blank[0][1];

	topFace[2][0] = blank[2][2];
	topFace[2][1] = blank[1][2];
	topFace[2][2] = blank[0][2];
}

function TopFaceRight(){
	var blank = JSON.parse(JSON.stringify(topFace));
	log("before: " + blank);
	topFace[0][0] = blank[2][0];
	topFace[0][1] = blank[1][0];
	topFace[0][2] = blank[0][0];

	topFace[1][0] = blank[2][1];
	topFace[1][2] = blank[0][1];

	topFace[2][0] = blank[2][2];
	topFace[2][1] = blank[1][2];
	topFace[2][2] = blank[0][2];
	log("after: " + blank);
}

function BottomFaceLeft(){
	var blank = JSON.parse(JSON.stringify(bottomFace));
	bottomFace[0][0] = blank[2][0];
	bottomFace[0][1] = blank[1][0];
	bottomFace[0][2] = blank[0][0];

	bottomFace[1][0] = blank[2][1];
	bottomFace[1][2] = blank[0][1];

	bottomFace[2][0] = blank[2][2];
	bottomFace[2][1] = blank[1][2];
	bottomFace[2][2] = blank[0][2];
}

function BottomFaceRight(){
	var blank = JSON.parse(JSON.stringify(bottomFace));
	bottomFace[0][0] = blank[2][0];
	bottomFace[0][1] = blank[1][0];
	bottomFace[0][2] = blank[0][0];

	bottomFace[1][0] = blank[2][1];
	bottomFace[1][2] = blank[0][1];

	bottomFace[2][0] = blank[2][2];
	bottomFace[2][1] = blank[1][2];
	bottomFace[2][2] = blank[0][2];
}

function MoveUp(){
	var blank = [];

	//begin rotations
	blank = JSON.parse(JSON.stringify(frontFace));
	frontFace = bottomFace;
	bottomFace = backFace;
	backFace = topFace;
	topFace = blank;

	LeftFaceUp();

	RightFaceUp();
}
function MoveDown(){
	var blank = [];

	//begin rotations
	blank = JSON.parse(JSON.stringify(frontFace));
	frontFace = topFace;
	topFace = backFace;
	backFace = bottomFace;
	bottomFace = blank;

	RightFaceDown();

	LeftFaceDown();
}
function MoveLeft(){
	var blank = [];

	//begin rotations
	blank = JSON.parse(JSON.stringify(frontFace));
	frontFace = rightFace;
	rightFace = backFace;
	backFace = leftFace;
	leftFace = blank;

	TopFaceLeft();

	BottomFaceLeft();
}
function MoveRight(){
	var blank = [];

	//begin rotations
	blank = JSON.parse(JSON.stringify(frontFace));
	frontFace = leftFace;
	leftFace = backFace;
	backFace = rightFace;
	rightFace = blank;

	TopFaceRight();

	BottomFaceRight();
}