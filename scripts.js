//Nav Bar Switcher Mobile/Desktop
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".navbar-responsive")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("navShow")
    const isNavShow = dropDownMenu.classList.contains("navShow")

    toggleBtnIcon.classList = isNavShow
        ? "fa-solid fa-xmark" :
        "fa-solid fa-bars";
}

// Footer Set Year
const ftDate = document.getElementById('ftDate');
ftDate.innerHTML = new Date().getFullYear();

// Route Inbound/Outbound Selector
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

