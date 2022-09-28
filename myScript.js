/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var turnArrow = document.getElementsByClassName("arrow");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var openDropdown = turnArrow[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const menuBtn = document.querySelector(".burger");
const cancelBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu-dropdown");
const menuDiv = document.querySelector(".menu-div");

menuBtn.addEventListener("click", navToggle);

function navToggle() {
  menu.classList.toggle("menu-drop");
  console.log(menu);
}
