function sniffer(message) {
    console.log("Something happened: " + message);
}

document.getElementById("main-html").onkeypress = function () {
    sniffer("You pressed a key");
};

document.getElementById("main-body").onresize = function () {
    sniffer("window resized");
};

document.getElementById("main-body").onload = function () {
    alert("page loading");
};

document.getElementById("input-change").onchange = function () {
    alert("It changed!");
};

document.getElementById("btn").onmouseover = function () {
    sniffer("Inner sniffer");
};

document.getElementById("second-paragraph").onmouseover = function () {
    alert("Moused over second P");
    console.log("Log the anonymous inner function on second paragraph");
};

document.getElementById("first-paragraph").onclick = function () {
    alert("Clicked first P");
    console.log("Log the anonymous inner function on first paragraph");
};
