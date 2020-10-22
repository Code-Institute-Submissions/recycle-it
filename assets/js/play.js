// Items

let items = {};

let path = window.location.pathname;
let pathLocation = path.split("/").pop();

function nextLevelModal() {
  //shows next level modal
  let modal = document.getElementById("successMessage");
  modal.style.display = "block";
}

function setActive(items) {
  //adds active items to the items object
  let activeDivs = document.getElementsByClassName("bins");
  for (let activeDiv of activeDivs) {
    let activeClass = activeDiv.className.replace(
      "plastic",
      "paper",
      "glass",
      "metal",
      "organic"
    );
    items[activeClass] = true;
  }
}

let activeCount = 0;

function checkActive() {
  //checks for active items, opens next level modal if not

  activeCount++;

  if (activeCount === 3 && pathLocation === "level-one.html") {
    nextLevelModal();
  } else if (activeCount === 4 && pathLocation === "level-two.html") {
    nextLevelModal();
  } else if (activeCount === 5 && pathLocation === "level-three.html") {
    nextLevelModal();
  }
}

function deactivateItem(item) {
  items[item] = false;
  return true;
}

function drag1(ev) {
  ev.dataTransfer.setData("choice1", ev.target.id);
}

function drag2(ev) {
  ev.dataTransfer.setData("choice2", ev.target.id);
}

function drag3(ev) {
  ev.dataTransfer.setData("choice3", ev.target.id);
}

function drag4(ev) {
  ev.dataTransfer.setData("choice4", ev.target.id);
}

function drag5(ev) {
  ev.dataTransfer.setData("choice5", ev.target.id);
}

// AllowDrop

function allowDrop(ev) {
  ev.preventDefault();
}

// SoundFile
let plasticCrunch = new Audio("assets/audio/plastic-crunch.mp3");
let paperScrunch = new Audio("assets/audio/paper-scrunch.mp3");
let glassSmash = new Audio("assets/audio/glass-smash.mp3");
let metalCrash = new Audio("assets/audio/metal-crash.mp3");
let foodSplat = new Audio("assets/audio/food-splat.mp3");

// Bins

function drop1(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("choice1");
  ev.target.appendChild(document.getElementById(data));
  plasticCrunch.play();
  checkActive();
}

function drop2(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("choice2");
  ev.target.appendChild(document.getElementById(data));
  paperScrunch.play();
  checkActive();
}

function drop3(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("choice3");
  ev.target.appendChild(document.getElementById(data));
  glassSmash.play();
  checkActive();
}

function drop4(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("choice4");
  ev.target.appendChild(document.getElementById(data));
  metalCrash.play();
  checkActive();
}

function drop5(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("choice5");
  ev.target.appendChild(document.getElementById(data));
  foodSplat.play();
  checkActive();
}
