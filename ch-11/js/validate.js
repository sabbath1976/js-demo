// function validateForm() {
//     var nameFirst = document.getElementById("nameFirst");
//     var theValue = nameFirst.value;

//     if (theValue != "Stefan") {
//         console.log("Will this fire?");

//         var messageHolder = document.getElementById("target");
//         messageHolder.style.color = "red";
//         messageHolder.innerHTML = "<h2>Put in my name!</h2>";
//         nameFirst.select();

//         return false;
//     }
// }

// document.getElementById("submit").onclick = function () {
//     var doSubmit = validateForm();

//     if (doSubmit == false) {
//         return false;
//     }
// };

document.getElementById("submit").onclick = function () {
    var doSubmit = validateForm();

    if (doSubmit == false) {
        return false;
    }
};

function validateForm() {
    var nameFirst = document.getElementById("nameFirst");
    var theValue = nameFirst.value;

    if (theValue != "Thomas") {
        console.log("Will this fire?");

        var messageHolder = document.getElementById("target");
        messageHolder.style.color = "red";
        messageHolder.innerHTML = "<h2>Put in my name!</h2>";

        nameFirst.select();
        // nameFirst.focus();

        return false;

        // console.log("Will this fire 2?");
    }
}
