function doItAgain() {
    var counter = 0;

    // while (counter < 5) {
    //     if (counter == 3) {
    //         alert("Three!");
    //         counter++;
    //     } else {
    //         console.log("Counter is now: " + counter);
    //         counter++;
    //     }
    // }

    for (var i = 0; i < 5; i++) {
        if (i == 3) {
            alert("Three!");
        } else {
            console.log("i is now: " + i);
        }
    }
}

document.getElementById("looper").onclick = function () {
    doItAgain();
    this.style.color = "purple";
};
