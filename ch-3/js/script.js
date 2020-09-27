function sniffer(message) {
    console.log("Event: " + message);
}

document.getElementById("btn").onmouseover = function () {
    sniffer("You moused over the button");
};

document.getElementById("paragraph-second").onclick = function () {
    sniffer("Clicked on second paragraph");
};
