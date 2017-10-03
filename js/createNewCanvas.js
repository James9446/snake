var createNewCanvas = document.getElementById("createNewCanvas");
var resetCreateNewCanvas = document.getElementById("resetCreateNewCanvas");
var userInputWindow = document.getElementById("userInputWindow");
var enterCanvasHeight = document.getElementById("enterCanvasHeight");
var enterCanvasWidth = document.getElementById("enterCanvasWidth");




function createNewCanvass() {

    document.body.removeChild(userInputWindow);

var enterCanvasHeightt = enterCanvasHeight.value;
var enterCanvasWidthh = enterCanvasWidth.value;
    document.body.innerHTML = enterCanvasHeightt+":"+enterCanvasWidthh;

    var newCanvas = document.createElement("canvas");

    newCanvas.classList.add("canvasDesign");

  newCanvas.style.height = enterCanvasHeightt+"px";
    newCanvas.style.width = enterCanvasWidthh+"px";
    newCanvas.height = 300;
    newCanvas.width = 300;

    document.body.appendChild(newCanvas);
    newCanvas.id = "stage";

 //    var canvasSize = document.getElementById("stage");
	// var canvasHeight = document.canvasNode.height = "300px";
	// var canvasWidth = document.canvas.width = 300;

	// canvasSize.appendChild(canvasHeight);
	// canvasSize.appendChild(canvasWidth);



}

createNewCanvas.addEventListener('click', createNewCanvass);