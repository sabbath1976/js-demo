// function startEdit() {
//     var element = document.getElementById("editableElement");
//     element.contentEditable = true;
//     element.focus();
// }

// function stopEdit() {
//     var element = document.getElementById("editableElement");
//     element.contentEditable = false;

//     alert("This is what you wrote: \n" + element.innerHTML);
// }

// document.getElementById("start").onclick = function () {
//     startEdit();
// }

// document.getElementById("stop").onclick = function () {
//     stopEdit();
// }

// document.getElementById("whiteBoard").onclick = function () {
//     var canvas = document.getElementById("whiteBoard");
//     var context = canvas.getContext("2d");

//     // set the line width and color (for all the lines)
//     context.lineWidth = 30;
//     context.strokeStyle = "rgb(205, 40, 40)";

//     // Draw the first line, with the standard butt ending
//     context.moveTo(25, 50); // (horizontal / vertical)
//     context.lineTo(400, 120);
//     context.lineCap = "butt";
//     context.stroke();

//     // Draw the second line. Change line color and line width
//     context.lineWidth = 25;
//     context.strokeStyle = "#95ca91";

//     context.beginPath();
//     context.moveTo(25, 120);
//     context.lineTo(400, 50);
//     context.lineCap = "butt";
//     context.stroke();
// }

var notRunning = true;

function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function discoSquare() {
    var canvas = document.getElementById("whiteBoard");
    var context = canvas.getContext("2d");

    var theColor = getRandomColor();
    var verPos = Math.floor(Math.random() * 399 + 1);

    context.lineWidth = 10;
    context.strokeStyle = theColor;
    context.moveTo(10, verPos);
    console.log("vertical pos: " + verPos);

    context.lineTo(400, verPos);
    context.lineCap = "butt";
    context.stroke();

    document.getElementById("displayColor").innerHTML = theColor;
}

var animation;

document.getElementById("discoStart").onclick = function () {
    if (notRunning) {
        animation = setInterval(discoSquare, 100);
        notRunning = false;
    } else {
        alert("Sorry, already running.");
    }
};

document.getElementById("discoStop").onclick = function () {
    clearInterval(animation);
    notRunning = true;
};
