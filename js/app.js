function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "okatok-nav") {
    x.className += " responsive";
  } else {
    x.className = "okatok-nav";
  }
}
function menuFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu-okatok-nav") {
    x.className += " responsive";
  } else {
    x.className = "menu-okatok-nav";
  }
}