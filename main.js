const landingImg = document.querySelector(".landing");
const leftBtn = document.querySelector(".landing .left");
const rightBtn = document.querySelector(".landing .right");
const bullets = document.querySelectorAll(".bullets li");
const firstCircle = bullets[0];
const midCircle = bullets[1];
const lastCircle = bullets[2];
let cnt = 0;
rightBtn.addEventListener("click", () => {
  switch (cnt) {
    case 0: {
      landingImg.style.backgroundImage =
        "url(https://wallpaperforu.com/wp-content/uploads/2021/07/Aesthetic-Black-Wallpaper321366x768.jpg)";
      cnt = 2;
      lastCircle.classList.add("active");
      midCircle.classList.remove("active");
      break;
    }
    case 1: {
      landingImg.style.backgroundImage = "url(images/landing.jpg)";
      cnt = 0;
      midCircle.classList.add("active");
      firstCircle.classList.remove("active");
      break;
    }
    case 2: {
      landingImg.style.backgroundImage =
        "url(https://wallpapercave.com/wp/wp4763059.jpg)";
      cnt = 1;
      firstCircle.classList.add("active");
      lastCircle.classList.remove("active");
      break;
    }
    default:
      break;
  }
});
leftBtn.addEventListener("click", () => {
  switch (cnt) {
    case 0: {
      landingImg.style.backgroundImage =
        "url(https://wallpapercave.com/wp/wp4763059.jpg)";
      cnt = 1;
      firstCircle.classList.add("active");
      midCircle.classList.remove("active");
      break;
    }
    case 1: {
      landingImg.style.backgroundImage =
        "url(https://wallpaperforu.com/wp-content/uploads/2021/07/Aesthetic-Black-Wallpaper321366x768.jpg)";
      cnt = 2;
      lastCircle.classList.add("active");
      firstCircle.classList.remove("active");
      break;
    }
    case 2: {
      landingImg.style.backgroundImage = "url(images/landing.jpg)";
      cnt = 0;
      midCircle.classList.add("active");
      lastCircle.classList.remove("active");
      break;
    }
    default:
      break;
  }
});
firstCircle.addEventListener("click", () => {
  landingImg.style.backgroundImage =
    "url(https://wallpapercave.com/wp/wp4763059.jpg)";
  cnt = 1;
  firstCircle.classList.add("active");
  midCircle.classList.remove("active");
  lastCircle.classList.remove("active");
});
midCircle.addEventListener("click", () => {
  landingImg.style.backgroundImage = "url(images/landing.jpg)";
  cnt = 0;
  firstCircle.classList.remove("add");
  midCircle.classList.add("active");
  lastCircle.classList.remove("active");
});
lastCircle.addEventListener("click", () => {
  landingImg.style.backgroundImage =
    "url(https://wallpaperforu.com/wp-content/uploads/2021/07/Aesthetic-Black-Wallpaper321366x768.jpg)";
  cnt = 2;
  firstCircle.classList.remove("active");
  midCircle.classList.remove("active");
  lastCircle.classList.add("active");
});
