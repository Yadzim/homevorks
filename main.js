
//   elements
const btns = document.querySelectorAll(".variantBox");
const crks = document.getElementById('result');
const timeLimit = document.querySelector(".timeLimit");

const greenCrk = '<div class="crk"></div>';
const redCrk = '<div class="crk crk2"></div>';
const yellowCrk = '<div class="crk crk3"></div>';

const signArrey = ["+", "-", "*"];
let variants = [];
let pointArray = [];

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

































// function enterBtn() {

//     mainFunc();
//     addCrkfunc();
//     // addCrk();
// };

// function mainFunc() {

//     // enter number
//     num1 = Math.floor(Math.random() * 201);
//     num2 = Math.floor(Math.random() * 201);
//     document.getElementById("number1").innerHTML = num1;
//     document.getElementById("number2").innerHTML = num2;

//     console.log(num1, num2);

//     // ishorani random qilish
//     sign = signArrey[Math.floor(Math.random() * 3)];
//     document.getElementById("sign").innerHTML = sign;

//     console.log(sign);

//     // tartib raqam qushish
//     s++;
//     document.getElementById("modeNum").innerHTML = s;

//     if (s === 16) {
//         window.location = 'result.html';
//     }

//     // hisoblash
//     result = eval(num1 + sign + num2);

//     console.log(result);

//     // variantlarni random qilish
//     const idVariantBtn = ["a", "b", "c", "d"];
//     let variantRAndom1 = idVariantBtn[Math.floor(Math.random() * 4)];

//     if (variantRAndom1 === "a") {
//         variantRAndom2 = "b";
//         variantRAndom3 = "c";
//         variantRAndom4 = "d";
//     } else if (variantRAndom1 === "b") {
//         variantRAndom2 = "a";
//         variantRAndom3 = "d";
//         variantRAndom4 = "c";
//     } else if (variantRAndom1 === "c") {
//         variantRAndom2 = "b";
//         variantRAndom3 = "a";
//         variantRAndom4 = "d";
//     } else {
//         variantRAndom2 = "b";
//         variantRAndom3 = "c";
//         variantRAndom4 = "a";
//     }

//     // variantlarni kiritish
//     document.getElementById(`${variantRAndom1}`).innerHTML = result;
//     document.getElementById(`${variantRAndom2}`).innerHTML = (result + Math.floor(Math.random() * 101 + 1));
//     document.getElementById(`${variantRAndom3}`).innerHTML = (result - Math.floor(Math.random() * 101 + 1));
//     document.getElementById(`${variantRAndom4}`).innerHTML = (result * Math.floor(Math.random() * 5 + 2) + 1);

//     console.log(variantRAndom1, variantRAndom2, variantRAndom3, variantRAndom4);

// }

// mainFunc();

// // shar qo'shish
// function addCrkfunc() {
//     let addGreenCrk = '<div class="crk"></div>';
//     let addRedCrk = '<div class="crk crk2"></div>';

//     if (document.querySelector('.variantBox').innerHTML == result)
//         addCrkArrey.push(addGreenCrk);
//     else
//         addCrkArrey.push(addRedCrk);

//     document.getElementById('result').innerHTML = addCrkArrey;
//     console.log(addCrkArrey);
// }

// yana bir varianti
// function addCrk(){
//     document.getElementById(`${variantRAndom1}`).addEventListener("click", () => {addCrkArrey.push(addGreenCrk);});
//     document.getElementById(`${variantRAndom2}`).addEventListener("click", () => {addCrkArrey.push(addRedCrk);});
//     document.getElementById(`${variantRAndom3}`).addEventListener("click", () => {addCrkArrey.push(addRedCrk);});
//     document.getElementById(`${variantRAndom4}`).addEventListener("click", () => {addCrkArrey.push(addRedCrk);});
// }
// addCrk();
