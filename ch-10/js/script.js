// function myFunction() {
//     document.write("<h2>Hello World</h2>");
// }

// document.write("Hello World");

// var theText = "blad blah <h1>The blah</h1>";
// var targetDiv = document.getElementById("theDiv");
// // targetDiv.innerHTML = theText + targetDiv.innerHTML;
// // targetDiv.innerHTML = theText;
// targetDiv.innerHTML += theText;

// console.log(targetDiv.innerHTML);

function addNewContent() {
    var para = document.createElement("p");
    var node = document.createTextNode("The new text");
    para.appendChild(node);

    var targetDiv = document.getElementById("theDiv");
    targetDiv.appendChild(para);

    console.log(targetDiv.innerHTML);
}

function domWork() {
    var targetDiv = document.getElementById("theDiv");
    targetDiv.style.backgroundColor = "#bbbbf1";

    console.log(targetDiv.innerHTML);
}

document.getElementById("btn").onclick = function () {
    // myFunction();
    // addNewContent();
    domWork();
};
