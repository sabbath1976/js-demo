function startEdit() {
    var element = document.getElementById("editableElement");
    element.contentEditable = true;
    element.focus();
}

function stopEdit() {
    var element = document.getElementById("editableElement");
    element.contentEditable = false;

    alert("This is what you wrote: \n" + element.innerHTML);
}

document.getElementById("start").onclick = function () {
    startEdit();
}

document.getElementById("stop").onclick = function () {
    stopEdit();
}