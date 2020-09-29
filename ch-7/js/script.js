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

// function doItAgain() {
//     var loopCount = 5;

//     while (loopCount > 0) {
//         var target = document.getElementById("target");

//         // target.innerHTML =
//         //     "LoopCount: " + loopCount + "<br>" + target.innerHTML;

//         // target.innerHTML += loopCount + " LoopCount" + "<br>";
//         // target.innerHTML = target.innerHTML + loopCount + "<br>";
//         target.innerHTML = loopCount + "<br>" + target.innerHTML;
//         console.log("LoopCount is now: " + loopCount);
//         loopCount--;
//     }

//     console.log("End loop");

//     var button = document.getElementById("looper");

//     button.innerText = "Done looping!";
//     button.style.fontSize = "34px";
// }

function doItAgain() {
    for (var i = 10; i >= 0; i--) {
        var target = document.getElementById("target");
        // target.innerHTML += i + " LoopCount" + "<br>";
        target.innerHTML = "LoopCount: " + i + "<br>" + target.innerHTML;

        console.log("LoopCount is now: " + i);

        var button = document.getElementById("looper");
        button.innerText = "Done looping!";
        button.style.fontSize = "34px";
    }

    console.log("End for loop");
}

document.getElementById("looper").onclick = function () {
    doItAgain();
    this.style.color = "red";
};
