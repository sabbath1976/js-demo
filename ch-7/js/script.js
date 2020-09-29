function doItAgain() {
    var counter = 0;

    while (counter < 10) {
        var target = document.getElementById("target");
        target.innerHTML += counter + "<br>";

        console.log("Counter is now: " + counter);

        counter++;
    }

    console.log("End of while loop");

    var button = document.getElementById("looper");
    button.innerText = "Done looping!";
    button.style.fontSize = "34px";
}

document.getElementById("looper").onclick = function () {
    doItAgain();
    this.style.color = "purple";
};
