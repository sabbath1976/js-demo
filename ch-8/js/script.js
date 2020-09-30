// alert(document.title);
document.getElementById("btn").onclick = function () {
    var dogs = ["German Shepherd", " Poodle", " Beagle", " Boxer"];
    dogs.push(" Pushed Dog");
    dogs.sort();

    var pets = ["Pets", " Pets2 ", dogs, " Pets3"];
    console.log("Pets length: " + pets.length);
    console.log(pets);

    var target = document.getElementById("target");
    target.innerHTML = pets;

    // alert(dogs.length);

    for (var i = 0; i < pets.length; i++) {
        // alert(dogs[i]);
        console.log(pets[i]);
    }
};
