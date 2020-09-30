document.getElementById("btn").onclick = function () {
    var dogs = ["German Shepherd ", 324432, " Beagle", " Boxer", " Chimpdog"];
    var result = document.getElementById("target");
    var pets = ["Pets", "Pets2", dogs, false];
    result.innerHTML = pets;

    dogs.push("Pushing Dog");

    // alert(dogs.length);
    // alert(dogs.sort());
    // console.log(dogs.sort());
    // var sortedDogs = dogs.sort();
    // result.innerHTML = sortedDogs;
    // console.log(sortedDogs);

    for (var index = 0; index < dogs.length; index++) {
        console.log(dogs[index]);
    }
};
