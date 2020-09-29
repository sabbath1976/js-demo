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

// function doItAgain() {
//     var loopCount = 5;

//     while (loopCount > 0) {
//         if (loopCount == 3) {
//             alert("Three!");
//             loopCount--;
//         } else {
//             console.log("LoopCount is now: " + loopCount);
//             loopCount--;
//         }
//     }

//     console.log("End loop!");
// }

function doItAgain() {
    var loopCount = 5;

    while (loopCount > 0) {
        var target = document.getElementById("target");

        // target.innerHTML =
        //     "LoopCount: " + loopCount + "<br>" + target.innerHTML;

        // target.innerHTML += loopCount + " LoopCount" + "<br>";
        // target.innerHTML = target.innerHTML + loopCount + "<br>";
        target.innerHTML = loopCount + "<br>" + target.innerHTML;
        console.log("LoopCount is now: " + loopCount);
        loopCount--;
    }

    console.log("End loop");

    var button = document.getElementById("looper");

    button.innerText = "Done looping!";
    button.style.fontSize = "34px";
}

document.getElementById("looper").onclick = function () {
    doItAgain();
    this.style.color = "red";
};
