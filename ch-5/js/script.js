// function sniffer(message) {
//     console.log("Event: " + message);
//     alert("inside function alert");
// }

// function outSide() {
//     alert("Called: outSide() function");
// }

// // alert("not in function code.");

// document.getElementById("btn").onclick = function () {
//     sniffer("clicked on button");
//     outSide();
// };

// var email = "sabbath1976@gmail.com";
// var theAt = email.indexOf(".");

// console.log(theAt);

// alert("Alert: " + "sabbath1976@gmail.com".indexOf("."));

function numberCheck() {
    var myNumber = "cookies";
    // var result = isNaN(myNumber);
    console.log(isNaN(myNumber));
}

function intCheck() {
    var myNumber = "32 cookies";
    var result = parseInt(myNumber);
    console.log(result);
    console.log(result + 32);
    console.log(myNumber + 32);
}

document.getElementById("btn").onclick = function () {
    numberCheck();
    // intCheck();
};
