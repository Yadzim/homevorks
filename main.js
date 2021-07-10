//   DUM elements

const contener = document.querySelector(".contener");

//   color list

const colorlist = [
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

//   add and random color list

function addAndRenderColor() {
  let result = "";
  let index = 0;

  for (let list of colorlist) {
    let colorlistRandomIndex = Math.floor(Math.random() * 27);
    let colorAbjectName = colorlist[colorlistRandomIndex];
    let colorName = colorAbjectName.color;

    result += `<div style="background-color: ${colorName};" class="box ${list.click ? "click" : ""}" onclick="clickColor(${index})" >${colorName}</div>`;
    index++;
  }
  contener.innerHTML = result;
}

addAndRenderColor();

//   click color

function clickColor(clickColorIndex) {
  let color = colorlist[clickColorIndex];
  color.click = !color.click;

  addAndRenderColor();
}

function aaa(){
  

    addAndRenderColor();
}
