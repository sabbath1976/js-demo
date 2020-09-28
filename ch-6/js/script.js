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
    var target = document.getElementById("first");
    var currentValue = target.innerHTML;
    console.log(currentValue);
}

document.getElementById("btn").onclick = function () {
    runIt();
};
