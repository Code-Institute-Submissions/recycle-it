// Items

function drag1 (ev) {
    ev.dataTransfer.setData("choice1", ev.target.id);
    console.log("plastic");
}

function drag2 (ev) {
    ev.dataTransfer.setData("choice2", ev.target.id);
    console.log("paper");
}

function drag3 (ev) {
    ev.dataTransfer.setData("choice3", ev.target.id);
    console.log("glass");
}

function drag4 (ev) {
    ev.dataTransfer.setData("choice4", ev.target.id);
    console.log("metal");
}

function drag5 (ev) {
    ev.dataTransfer.setData("choice5", ev.target.id);
    console.log("organic");
}

// AllowDrop

function allowDrop (ev) {
    ev.preventDefault();
}

// SoundFile
var plasticCrunch = new Audio ('assets/audio/plastic-crunch.mp3');
var paperScrunch = new Audio ('assets/audio/paper-scrunch.mp3');
var glassSmash = new Audio ('assets/audio/glass-smash.mp3');
var metalCrash = new Audio ('assets/audio/metal-crash.mp3');
var foodSplat = new Audio ('assets/audio/food-splat.mp3');

// Bins

function drop1 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData ("choice1");
    ev.target.appendChild(document.getElementById(data));
    plasticCrunch.play();
}

function drop2 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("choice2");
    ev.target.appendChild(document.getElementById(data));
    paperScrunch.play();
}

function drop3 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("choice3");
    ev.target.appendChild(document.getElementById(data));
    glassSmash.play();
}

function drop4 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("choice4");
    ev.target.appendChild(document.getElementById(data));
    metalCrash.play();
}

function drop5 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("choice5");
    ev.target.appendChild(document.getElementById(data));
    foodSplat.play();
}
