

//   DOM element

const contener = document.querySelector(".contener");
const points = document.querySelector(".points");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const order = document.querySelector(".order");


//   js element

let idImage = 1;
let point = "";
let result = "";
let n = 9;

creatPoints();
const pointe = document.querySelectorAll(".point");


//   render image

function renderImage(){
  if(idImage < 1) idImage = n;
  if(idImage >= n+1) idImage = 1;

  pointe.forEach((point) => point.classList.remove("black"));
  pointe[idImage-1].classList.add("black");

  result = `<img src="https://picsum.photos/id/${idImage}/1200/600" alt="image${idImage}">`;
  order.innerHTML = `<div><span>${idImage} </span>/ ${n}</div>`;

  contener.innerHTML = result;
}
renderImage();


//   creat points

function creatPoints(){
  for(let i=0; i<n; i++){
    point += `<div class="point"></div>`;
  }
  points.innerHTML = point;
}


//   handle angle

left.addEventListener("click", () => {
  idImage--;
  renderImage();
});

right.addEventListener("click", () => {
  idImage++;
  renderImage();
});


