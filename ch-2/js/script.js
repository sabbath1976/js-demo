function sniffer(message) {
    console.log("Something happened: " + message);
}

document.getElementById("btn").onclick = function () {
    sniffer("Inner sniffer");
};
