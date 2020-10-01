function aFunction() {
    var rightButton = document.getElementById("rightbutt");
    rightButton.value = "What?";
    // alert(rightButton.value);
}

function resetValue() {
    var rightButton = document.getElementById("rightbutt");
    rightButton.value = "Do it again!";
}

document.getElementById("rightbutt").onclick = function () {
    // alert(this.value);
    aFunction();
};

document.getElementById("leftbutt").onclick = function () {
    // alert(this.value);
    // alert(document.title);
    aFunction();
    // resetValue();
};
