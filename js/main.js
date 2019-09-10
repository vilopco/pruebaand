window.onscroll = function() {navActivation()};
var navbar = document.getElementById("navbar");

function navActivation() {
  if (window.pageYOffset >= 50) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
navActivation();
		