function dropDown() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction(x) {
  x.classList.toggle("change");
}