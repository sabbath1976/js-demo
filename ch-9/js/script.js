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

// var globalVar = "global";

// function variableScope() {
//     var localVar = 665;
//     return localVar;
// }

// // alert(globalVar);
// // alert(localVar);
// alert(variableScope());

// function multiReturn(first, last, age) {
//     var fullName = first + " " + last;
//     var displayAge = "Age: " + age;
//     var namePackage = [fullName, displayAge];

//     return namePackage;
// }

function checkAge(age) {
    var oldEnough;

    if (age > 17) {
        oldEnough = true;
    } else {
        oldEnough = false;
    }

    return oldEnough;
}

document.getElementById("btn").onclick = function () {
    // var myNameArray = multiReturn("Thomas", "Kontogiannis", 17);
    // console.log(myNameArray[1]);

    console.log(checkAge(12));
}