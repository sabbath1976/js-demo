document.getElementById("btn").onclick = function () {
    var dogs = ["German Shepherd ", 324432, " Beagle", " Boxer"];
    var result = document.getElementById("target");
    var pets = ["Pets", "Pets2", dogs, "Pets3"];
    result.innerHTML = pets;
};
