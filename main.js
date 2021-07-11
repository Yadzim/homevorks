
//   DUM elements

const contener = document.querySelector(".contener");

let a=0;


//   color list

const colorlist = [
  {
   color: "#000",
   click: true
  },
  {
   color: "#e71a43",
   click: false
  },
  {
   color: "#43e71a",
   click: false
  },
  {
   color: "#1a43e7",
   click: false
  },
  {
   color: "#e7581a",
   click: false
  },
  {
   color: "#e71aaa",
   click: false
  },
  {
   color: "#1ae7be",
   click: false
  },
  {
   color: "#aae71a",
   click: false
  },
  {
   color: "#be1ae7",
   click: false
  },
  {
   color: "#e7be1a",
   click: false
  },
  {
   color: "#999",
   click: false
  },
  {
   color: "#d2691e",
   click: false
  },
  {
   color: "#00ffff",
   click: false
  },
  {
   color: "#fa899c",
   click: false
  },
  {
   color: "#444",
   click: false
  },
  {
   color: "#e71a43",
   click: false
  },
  {
   color: "#43e71a",
   click: false
  },
  {
   color: "#1a43e7",
   click: false
  },
  {
   color: "#e7581a",
   click: false
  },
  {
   color: "#e71aaa",
   click: false
  },
  {
   color: "#1ae7be",
   click: false
  },
  {
   color: "#aae71a",
   click: false
  },
  {
   color: "#be1ae7",
   click: false
  },
  {
   color: "#e7be1a",
   click: false
  },
  {
   color: "#777",
   click: false
  },
  {
   color: "#d2691e",
   click: false
  },
  {
   color: "#00ffff",
   click: false
  },
  {
   color: "#fa899c",
   click: false
  }
];


//   add and render color list

function addAndRenderColor() {
  let result = "";
  let index = 0;

  if(a === 0){
  randomColorList(colorlist);
  }

  for (let list of colorlist) {
    result += `<div style="background-color: ${list.color};" class="box ${list.click ? "click" : ""} ${list.color === "#000" ? "color" : ""}" onclick = "clickColor(${index})">${list.color}</div>`;
    index++;
  }

  contener.innerHTML = result;
}

addAndRenderColor();


//   click color

function clickColor(clickColorIndex) {
  for(let list of colorlist){
    list.click = false;
  }
  a = 1;
  let color = colorlist[clickColorIndex];
  color.click = !color.click;

  addAndRenderColor();
}


//   random color list

function randomColorList(array) {
  var currentIndex = array.length,  randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}


//   click random button

function newAddAndRenderColor(){
  for(let list of colorlist){
    list.click = false;
    if(list.color === "#000"){
      list.click = true;
    }
  }
  a = 0;

  addAndRenderColor();
}