

//   DOM element

const contener = document.querySelector(".contener");
const points = document.querySelector(".points");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const order = document.querySelector(".order");


//   js element

let idImage = 1;
let index = 1;
let n = 3;

creatPoints();
const pointe = document.querySelectorAll(".point");


//   render image

function renderImage(){
  if(idImage < 1) idImage = n;
  if(idImage >= n+1) idImage = 1;
  if(index > n*3) index = 1;

  pointe.forEach((point) => point.classList.remove("black"));
  pointe[idImage-1].classList.add("black");

  contener.innerHTML = `<div>
    <img src="https://picsum.photos/id/${index++}/1200/600" alt="image${index-1}">
    <img src="https://picsum.photos/id/${index++}/1200/600" alt="image${index-1}">
    <img src="https://picsum.photos/id/${index++}/1200/600" alt="image${index-1}">
  </div>`;

  order.innerHTML = `<div><span>${idImage} </span>/ ${n}</div>`;
}
renderImage();


//   creat points

function creatPoints(){
  let point = "";

  for(let i=0; i<n; i++){
    point += `<div class="point"></div>`;
  }
  points.innerHTML = point;
}


//   click angle

left.addEventListener("click", () => {
  idImage--;
  renderImage();
});

right.addEventListener("click", () => {
  idImage++;
  renderImage();
});