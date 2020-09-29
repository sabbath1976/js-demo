function doItAgain() {
    var loopCount = 5;

    while (loopCount > 0) {
        console.log("LoopCount is now: " + loopCount);
        // loopCount = loopCount - 1;
        // loopCount -= 1;
        loopCount--;
    }

    console.log("End loop");
}

document.getElementById("looper").onclick = function () {
    doItAgain();
};
function doItAgain() {
    var counter = 0;

    while (counter < 10) {
        var target = document.getElementById("target");
        target.innerHTML += counter + "<br>";

        console.log("Counter is now: " + counter);

        counter++;
    }

    console.log("End of while loop");
}

document.getElementById("looper").onclick = function () {
    doItAgain();
    this.style.color = "purple";
};
