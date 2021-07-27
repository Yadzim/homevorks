
//   DOM elements

const letters = document.querySelectorAll(".letter");
const easy = document.querySelector(".easy");
const middle = document.querySelector(".middle");
const hard = document.querySelector(".hard");
const changeWordSpace = document.querySelector(".changeWordSpace");
const time = document.querySelector(".time");
const findedWords = document.querySelector(".findedWords");


//   js elements

let words = ["hello", "apple", "space", "home", "ship", "find"];
const words12 = ["work", "gless", "mouse", "bull", "play", "sun"];
const words18 = ["hello", "apple", "space", "home", "ship", "find"];
let result = "";


//   click category btn

// easy.addEventListener("click", () => {
//   // window.location = 'main.html';
//   console.log("salom");
// });

// middle.addEventListener("click", () => {
//   words = words.concat(words12);
//   // window.location = 'main.html';
// });

// hard.addEventListener("click", () => {
//   words = words.concat(words12, words18);
//   // window.location = 'main.html';
// });

console.log(words);


//

function placementWord(){
  let index = 1;
  for(let word of words){
    result += "<div class='word'>" + word + "</div>";

    if(index%3 === 0){
      findedWords.innerHTML += "<div>" + result + "</div>";
      result = "";

      // 😉
      document.querySelector(".word").classList.add("findedWord");
    }

    index++;
  }
}
placementWord();


//

function timeLimit(){
  let i = 10;
    setInterval(() => {
      time.innerHTML = i--;
    }, 1000);
  }
// timeLimit();

letters.forEach(letter => {
  letter.addEventListener("click", () => {
    letter.classList.toggle("clickLetter");
  })
});
