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

/*if ( correctCards == 10 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
}*/

/*-------------STEPS I NEED HELP WITH TO GET MODAL TO WORK---------------*/

//Need a function that runs through the items and the numbers to save 
//running the same code over and over.

//So want to check what item is being moved:

//Eventlistener - see what item - set that into a var item

var dragged;

document.getElementById("div1").addEventListener("drag", function(event){

});

/*NEED TO DO THIS

Then when have the item, need to put that choice into a drag function 

SOMETHING LIKE*/

function drag (ev, item) {
ev.dataTransfer.setData(item, ev.target.id);
}

//also need to do that for the drop:

//SOMETHING LIKE:

function drop (ev, item) {
ev.preventDefault();
var data = ev.dataTransfer.getData (item);
ev.target.appendChild(document.getElementById(data));

//play whatever sound dependant on item 
plasticCrunch.play();
}

//next want to put all the items that have been picked into an array 

// empty array to start with*/
var levelComplete = [];

//SOMETHING LIKE

if (choice == "plastic") {
var choiceNumber = 
// add choice to array - 
levelComplete.push("plastic");
// console.log("plastic");
}else if (choice == "paper" ) {
levelComplete.push("paper");
// console.log("paper");
}else if (choice == "glass") {
levelComplete.push("glass");
// console.log("glass");
}else if (choice == "metal") {
levelComplete.push("metal");
// console.log("metal");
}else (choice == "organic") {
levelComplete.push("organic");
// console.log("organic");
}

//when that array is full has length of 5 or more want it to showMessage
// Show message when array length 5 

if levelComplete.length > 5 {
showMessage("successMessage")
}
