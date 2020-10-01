// function singleReturn(argues) {
//     return "The function returned information: " + argues;
// }

function singleReturn(first, last) {
    return "Your first name: " + first + "\nYour last name: " + last;
}

document.getElementById("btn").onclick = function () {
    // alert(singleReturn("Passing a message"));
    // console.log(singleReturn("Passing a message"));
    console.log(singleReturn("Thomas", "Kontogiannis"));
};
