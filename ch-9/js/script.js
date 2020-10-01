function aFunction(aButton) {
    var button = document.getElementById(aButton);
    button.value = "It was clicked!!!";
    // alert(rightButton.value);
}

// function aFunction2() {
//     var leftButton = document.getElementById("leftbutt");
//     leftButton.value = "What?";
//     // alert(rightButton.value);
// }

// function resetValue() {
//     var rightButton = document.getElementById("rightbutt");
//     rightButton.value = "Do it again!";
// }

document.getElementById("rightbutt").onclick = function () {
    // alert(this.value);
    aFunction(this.id);
};

document.getElementById("leftbutt").onclick = function () {
    // alert(this.value);
    // alert(document.title);
    aFunction(this.id);
    // resetValue();
};
