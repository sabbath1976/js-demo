function singleReturn(argues) {
    return "The function returned information: " + argues;
}

document.getElementById("btn").onclick = function () {
    alert(singleReturn("Passing a message"));
    console.log(singleReturn("Passing a message"));
};
