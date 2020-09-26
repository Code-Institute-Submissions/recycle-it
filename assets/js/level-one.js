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

// AllowDrop

function allowDrop (ev) {
    ev.preventDefault();
}

// SoundFile
var audio = new Audio ('assets/audio/plastic-crunch.mp3');

// Bins

function drop1 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData ("choice1");
    ev.target.appendChild(document.getElementById(data));
    audio.play();
}

function drop2 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("choice2");
    ev.target.appendChild(document.getElementById(data));
    audio.play();
}

function drop3 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("choice3");
    ev.target.appendChild(document.getElementById(data));
    audio.play();
}
