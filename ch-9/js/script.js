// function singleReturn(argues) {
//     return "The function returned information: " + argues;
// }

// function singleReturn(first, last) {
//     return "Your first name: " + first + "\nYour last name: " + last;
// }

// document.getElementById("btn").onclick = function () {
//     // alert(singleReturn("Passing a message"));
//     // console.log(singleReturn("Passing a message"));
//     console.log(singleReturn("Thomas", "Kontogiannis"));
// };

var globalVar = "global";

function variableScope() {
    var localVar = 665;
    return localVar;
}

// alert(globalVar);
// alert(localVar);
alert(variableScope());