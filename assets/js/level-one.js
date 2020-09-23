function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log("plastic");
}

if ($('#drag1').hasClass('plastic')) {
   // Do something
} else {
   // Do something else
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  playSound("/audio/plastic-crunch.mp3");
}