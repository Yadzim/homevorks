
//   DUM elements

const menuAllClassname = document.querySelector(".navbar");
const contener = document.querySelector("#contener");
const menuClassnameAllProdact = document.querySelector(".allProdact");
const menuClassnameTaomlar = document.querySelector(".taomlar");
const menuClassnameIchimlik = document.querySelector(".ichimlik");
const menuClassnameShirinlik = document.querySelector(".shirinlik");


//   listlar to'plami

let prodacts = [
  {
    nomi: "osh",
    turi: "taom",
    narxi: 50,
    soni: 1,
    like: false,
  },
  {
    nomi: "shashlik",
    turi: "taom",
    narxi: 20,
    soni: 1,
    like: false,
  },
  {
    nomi: "pepsi",
    turi: "ichimlik",
    narxi: 9,
    soni: 1,
    like: false,
  },
  {
    nomi: "snikers",
    turi: "shirinlik",
    narxi: 4,
    soni: 1,
    like: false,
  },
  {
    nomi: "fanta",
    turi: "ichimlik",
    narxi: 9,
    soni: 1,
    like: false,
  },
  // {
  //     nomi: "shurva",
  //     turi: "taom",
  //     narxi: 30,
  //     soni: 1,
  //     like: false
  // },
  // {
  //     nomi: "cake",
  //     turi: "shirinlik",
  //     narxi: 60,
  //     soni: 1,
  //     like: false
  // }
];
const prodactsTwo = prodacts;


//   Add list

function renderProdactList() {
  let result = "";
  let index = 0;
  for (let list of prodacts) {
    result += `<div class="one tr">
            <div class="box order">${index + 1}</div>
            <div class="box name">${list.nomi}</div>
            <div class="box price">${list.narxi}</div>
            <div class="box type">${list.turi}</div>
            <div class="box size"><button onclick="minus(${index})" class="minus">-</button><p id="sizeId">${
      list.soni
    }</p><button onclick="plus(${index})" class="plus">+</button></div>
            <div class="box like"><i class="fa${list.like ? "" : "r"} fa-heart" onclick="likelist(${index})" ></i></div>
            <div class="box delete"><i class="fa fa-trash" onclick="deleteList(${index})" ></i></div>
        </div>`;
    index++;
  }
  contener.innerHTML = result;
}
renderProdactList();


//   incrument and decrument

function plus(incrumentIndex) {
  let list = prodacts[incrumentIndex];
  let list2 = prodactsTwo[incrumentIndex];
  list.soni++;
  list.narxi = list2.narxi*list.soni;

  renderProdactList();
}

function minus(decrumentIndex) {
  let list = prodacts[decrumentIndex];
  let list2 = prodactsTwo[decrumentIndex];
  list.soni--;
  list.narxi = list2.narxi*list.soni;

  if(list.soni === 0){
      if (confirm("List bushatildi u o'chirib tashlanadi!!!")) {
          prodactsTwo.splice(decrumentIndex, 1);
        } else{
            list.soni++;
            list.narxi = list2.narxi;
        }

        renderProdactList();
    }

  renderProdactList();
}


//   delete list

function deleteList(deleteListIndex) {
  if (confirm("Rosdan ham listni o'chirmoqchimisiz?")) {
    prodactsTwo.splice(deleteListIndex, 1);
  }

  renderProdactList();
}


//   like list

function likelist(likelistIndex){
    let list = prodacts[likelistIndex];
    list.like = !list.like;

    renderProdactList();
}


//   menu chenge

menuClassnameAllProdact.addEventListener("click", () => { prodacts = prodactsTwo; renderProdactList()});

menuClassnameTaomlar.addEventListener("click", () => {
  let newProdacts = [];
  prodactsTwo.forEach(list => { if(list.turi === "taom") newProdacts.push(list); });
  prodacts = newProdacts;
  renderProdactList();
});

menuClassnameIchimlik.addEventListener("click", () => {
  let newProdacts = [];
  prodactsTwo.forEach(list => { if(list.turi === "ichimlik") newProdacts.push(list); });
  prodacts = newProdacts;
  renderProdactList();
});

menuClassnameShirinlik.addEventListener("click", () => {
  let newProdacts = [];
  prodactsTwo.forEach(list => { if(list.turi === "shirinlik") newProdacts.push(list); });
  prodacts = newProdacts;
  renderProdactList();
});