function doItAgain() {
    // var counter = 0;

    // while (counter < 10) {
    for (var i = 0; i < 10; i++) {
        var target = document.getElementById("target");
        target.innerHTML += i + "<br>";

        console.log("Counter is now: " + i);

        // counter++;
    }

    console.log("End of for loop");

    var button = document.getElementById("looper");
    button.innerText = "Done looping!";
    button.style.fontSize = "34px";
}

document.getElementById("looper").onclick = function () {
    doItAgain();
    this.style.color = "purple";
};
