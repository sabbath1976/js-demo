// function doItAgain() {
//     var loopCount = 5;

//     while (loopCount > 0) {
//         console.log("LoopCount is now: " + loopCount);
//         // loopCount = loopCount - 1;
//         // loopCount -= 1;
//         loopCount--;
//     }

//     console.log("End loop");
// }

function doItAgain() {
    var loopCount = 5;

    while (loopCount > 0) {
        if (loopCount == 3) {
            alert("Three!");
            loopCount--;
        } else {
            console.log("LoopCount is now: " + loopCount);
            loopCount--;
        }
    }

    console.log("End loop!");
}

document.getElementById("looper").onclick = function () {
    doItAgain();
    this.style.color = "red";
};
