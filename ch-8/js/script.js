document.getElementById("btn").onclick = function () {
    var dogs = ["German Shepherd ", 324432, " Beagle", " Boxer", " Chimpdog"];
    var result = document.getElementById("target");
    var pets = ["Pets", "Pets2", dogs, false];
    result.innerHTML = pets;

    alert(dogs.length);
};
