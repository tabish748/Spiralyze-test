const closeVideoBtn = document.querySelector("#close");
const videoContainer = document.querySelector(".video-modal-section");
const videoIcon = document.querySelector(".videoIcon");
let vid = document.querySelector("#video");
const hamburger = document.querySelector(".hamburger-wrapper");
const mobMenu = document.querySelector(".nav-menu-wrapper");
const countrySelect = document.querySelector("#countriesSelect");
let flag = true;
// event listeners
closeVideoBtn.addEventListener("click", closeVideoModel);
videoIcon.addEventListener("mouseenter", hoverVideoIcon);
videoIcon.addEventListener("mouseleave", removeHoverVideoIcon);
videoIcon.addEventListener("click", showVideoModal);
hamburger.addEventListener("click", showMobileMenu);

function showMobileMenu() {
  mobMenu.classList.toggle("showNavMobCss");
  const img = document.querySelector('.hamburger-wrapper img')
  if (flag == true) {
    flag = false;
    img.setAttribute('src', './assets/images/icons/cross.svg')
  } else if (flag == false) {
    flag = true;
    img.setAttribute('src', './assets/images/icons/hamburger.svg')
  }
}

function hoverVideoIcon() {
  videoIcon.style.transition = ".5s easi-in-out";
  videoIcon.setAttribute("src", "./assets/images/icons/hoverVideoIcon.svg");
}
function removeHoverVideoIcon() {
  videoIcon.setAttribute("src", "./assets/images/icons/videoIcon.svg");
  videoIcon.style.transition = ".5s easi-in-out";
}
function showVideoModal() {
  videoContainer.style.display = "flex";
  vid.setAttribute("src", "./assets/videos/video.mp4");
}

function closeVideoModel() {
  const video = document.querySelector("video");
  videoContainer.style.display = "none";
  video.pause();
}

// ********************

async function fetchCountriesName() {
  const response = await (
    await fetch("https://restcountries.com/v3.1/all")
  ).json();
  response.map((country) => {
    const option = document.createElement("option");
    option.innerText = country.name.common;
    option.setAttribute("value", country.name.common);
    countrySelect.append(option);
  });
}

fetchCountriesName();
