
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
const words12 = ["hello", "apple", "space", "home", "ship", "find", "work", "gless", "mouse", "bull", "play", "sun"];
const words18 = ["hello", "apple", "space", "home", "ship", "find"];
let saver = [];
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


//  render word space
function placementWord(){
  let index = 1;
  for(let word of words){
    result += "<div class='word'>" + word + "</div>";

    if(index%3 === 0){
      findedWords.innerHTML += "<div>" + result + "</div>";
      result = "";
    }

    index++;
  }
}
placementWord();

// time limite
function timeLimit(){
  let i = 10;
    setInterval(() => {
      time.innerHTML = i--;
    }, 1000);
  }
// timeLimit();

//  click latter
letters.forEach(letter => {
  letter.addEventListener("click", () => {
    letter.classList.toggle("clickLetter");
  })
});

//   check word and
function checkWord(){
  letters.forEach(letter => {
    letter.value = 0;
    letter.addEventListener("click", () => {
     if(!letter.value){
      saver.push(letter.innerHTML);
      let s = 0
      console.log(saver);

      letter.value=1;
      for (const word of words) {
        if(word == saver.join("").toString()){
          document.querySelectorAll(".word")[s].classList.add("findedWord");
          saver = [];
          letter.value=0;
        }
        s++;
      }
     } else{
       saver.pop();
       console.log(saver);
       letter.value=0;
      }
      console.log(letter.value);
    })
  });
}
checkWord();



