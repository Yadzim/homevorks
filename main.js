
//   elements
const btns = document.querySelectorAll(".variantBox");
const crks = document.getElementById('result');
const timeLimit = document.querySelector(".timeLimit");

const greenCrk = '<div class="crk"></div>';
const redCrk = '<div class="crk crk2"></div>';
const yellowCrk = '<div class="crk crk3"></div>';

const signArrey = ["+", "-", "*"];
let variants = [];

let num1, num2, sign, green = 0, red = 0, yellow = 0;
let order = 1;
let time = 10;
let result;

//   render And Random Number
function renderAndRandomNumber() {
  num1 = Math.floor(Math.random() * 201);
  num2 = Math.floor(Math.random() * 201);
  document.getElementById("number1").innerHTML = num1;
  document.getElementById("number2").innerHTML = num2;

  // console.log(num1, num2);

  renderAndRandomSign();
  calculate();
  renderAndRandomVariant();
  addOrderNumber();
}
renderAndRandomNumber();

//   render And Random Sign
function renderAndRandomSign() {
  sign = signArrey[Math.floor(Math.random() * 3)];
  document.getElementById("sign").innerHTML = sign;

  // console.log(sign);
}
renderAndRandomSign();

//   calculate
function calculate() {
  result = eval(num1 + sign + num2);

  console.log(result);
}
calculate();

//   random and render variant
function renderAndRandomVariant() {
  let idx = 0;
  variants = [ result, result + Math.floor(Math.random() * 101 + 1), result - Math.floor(Math.random() * 101 + 1), result * Math.floor(Math.random() * 4 + 2) + 1, ];

  let currentIndex = variants.length, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [variants[currentIndex], variants[randomIndex]] = [variants[randomIndex], variants[currentIndex],];
  }

  for (let btn of btns) {
    btn.innerHTML = variants[idx];
    idx++;
  }
  // console.log(variants);
}
renderAndRandomVariant();

//   add crk
function addCrk() {
  for (let btn of btns) {
    btn.addEventListener("click", () => {
      if(btn.innerHTML == result){
        crks.innerHTML += greenCrk;
        green++;
      } else{
        crks.innerHTML += redCrk;
        red++;
      }
      order++;
      time = 10;
      renderAndRandomNumber();
      // console.log(green, red);
    });
  }

}
addCrk();

//   add order number
function addOrderNumber() {
  document.getElementById("modeNum").innerHTML = order;

  if (order === 15) {
    window.location = "result.html";
    totalPoint();
  }
}
addOrderNumber();

//   time limite
function timeLimite(){
  setInterval(() => {
    timeLimit.innerHTML = time;
    if(time === 0){
      crks.innerHTML += yellowCrk;
      time = 10;
      order++;
      yellow++;
      renderAndRandomNumber();
    }
    // console.log(yellow);
    time--;
  }, 1000);
}
timeLimite();

//   total point
import { totalPoint } from "./result";

totalPoint(green, red, yellow);