function nameValidation() {
    do {
        var email = prompt("Enter your email:");
        var result = email.indexOf("@");

        if (result != -1) {
            console.log("Your email is correct");
        } else {
            alert("Your email is incorrent. Please try again");
            console.log("Your email is incorrect");
        }
    } while (result == -1);
}

document.getElementById("looper").onclick = function () {
    nameValidation();
    this.style.color = "purple";
};
