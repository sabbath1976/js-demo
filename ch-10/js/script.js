// function myFunction() {
//     document.write("<h2>Hello World</h2>");
// }

// document.write("Hello World");

var theText = "blad blah <h1>The blah</h1>";
var targetDiv = document.getElementById("theDiv");
// targetDiv.innerHTML = theText + targetDiv.innerHTML;
// targetDiv.innerHTML = theText;
targetDiv.innerHTML += theText;

console.log(targetDiv.innerHTML);

// document.getElementById("btn").onclick = function () {
//     // myFunction();
// };
