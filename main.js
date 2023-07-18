const landingImg = document.querySelector(".landing");
const leftBtn = document.querySelector(".landing .left");
const rightBtn = document.querySelector(".landing .right");
const bullets = document.querySelectorAll(".bullets li");
const firstCircle = bullets[0];
const midCircle = bullets[1];
const lastCircle = bullets[2];
let imgIndex = 1;
let imgTimer = setInterval(autoChange, 3000);


function changeImage(index) {
  imgIndex = index
  landingImg.style.backgroundImage = `url(images/${index + 1}.jpg)`
  bullets.forEach((bullet, i) => bullet.classList.toggle("active", i === index))
  clearInterval(imgTimer)
  imgTimer = setInterval(autoChange, 3000);
}

function showNextImage() {
  imgIndex = (imgIndex + 1) % 3
  changeImage(imgIndex)
}

function showPrevImage() {
  imgIndex = (imgIndex + 2) % 3
  changeImage(imgIndex)
}

function autoChange() {
  imgIndex++
  if (imgIndex > 2) {
    imgIndex = 0
    changeImage(imgIndex)
  }
  else {
    changeImage(imgIndex)
  }
}

rightBtn.addEventListener("click", showNextImage);
leftBtn.addEventListener("click", showPrevImage);
bullets.forEach((bullet, i) => bullet.addEventListener("click", () => changeImage(i)))
/*
TODO:TIME TO SEPERATE AND BUNDLE!!!!
*/

const portfolio = document.querySelector(".portfolio")
const buttons = portfolio.querySelectorAll(".shuffle li")
console.log(buttons)
buttons.forEach(btn => btn.addEventListener('click', () => {
  buttons.forEach(otherBtn => otherBtn.classList.remove('active'));
  btn.classList.toggle('active')
}))