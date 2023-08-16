var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn1");
var btn = document.getElementById("btn2");
var btn = document.getElementById("btn3");
var btn = document.getElementById("btn4");
var btn = document.getElementById("btn5");
var btn = document.getElementById("btn6");
var btn = document.getElementById("btn7");
var btn = document.getElementById("btn8");
var btn = document.getElementById("btn9");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}