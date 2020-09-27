function sniffer(message) {
    console.log("Event: " + message);
    alert("inside function alert");
}

function outSide() {
    alert("Called: outSide() function");
}

alert("not in function code.");

document.getElementById("btn").onclick = function () {
    sniffer("clicked on button");
    outSide();
};
