// positioning the section after absolute carousel div
window.onload = window.onresize = function () {
        document.querySelector('main').style.top = document.querySelector('.carousel').offsetHeight+30+'px';
    } 


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navv").classList.toggle = "sticky";
  } else {
        document.querySelector(".navv").classList.toggle = "sticky";;
  }
  prevScrollpos = currentScrollPos;
}