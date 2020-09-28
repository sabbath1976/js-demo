// if (1 > 4) {
//     console.log("It's true, so display this text!");
//     alert("It's true");
// } else {
//     console.log("It's not true");
// }

function runIt() {
    // console.log(document.getElementById("first").innerHTML);
    // var currentValue = document.getElementById("first").innerHTML;
    // console.log(currentValue);
    //     var target = document.getElementById("first");
    //     var currentValue = target.innerHTML;
    //     console.log(currentValue);

    //     if (1 < 4) {
    //         // document.getElementById("first").innerHTML = "It is!";
    //         target.innerHTML = "It isssssssssss!";
    //     }

    // console.log("This is it".indexOf("@"));
    var str = "This is it";
    // console.log(str.indexOf("@"));
    var result = str.indexOf("t");
    console.log(result);

    if (result != -1) {
        console.log("Result is: " + result);
        console.log(true);
        alert("The occurence was found at position " + result);
    } else {
        console.log("Result is: " + result);
        console.log(false);
        alert("The occurence was not found");
    }
}

document.getElementById("btn").onclick = function () {
    runIt();
};
