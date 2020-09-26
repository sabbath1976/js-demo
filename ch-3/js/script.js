function sniffer(message) {
    console.log("Something happened: " + message);
}

document.getElementById("btn").onmouseover = function () {
    sniffer("You moused over the button");
};
