
//   DUM elements

const menuAllClassname = document.querySelector(".navbar");
const contener = document.querySelector("#contener");
const menuClassnameAllProdact = document.querySelector(".allProdact");
const menuClassnameTaomlar = document.querySelector(".taomlar");
const menuClassnameIchimlik = document.querySelector(".ichimlik");
const menuClassnameShirinlik = document.querySelector(".shirinlik");
const page = document.getElementsByClassName("page");
const pageOne = document.querySelector(".pageone");
const pageTwo = document.querySelector(".pagetwo");
const btns = document.getElementsByClassName("menu");


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
  {
      nomi: "shurva",
      turi: "taom",
      narxi: 30,
      soni: 1,
      like: false
  },
  {
      nomi: "fensi",
      turi: "ichimlik",
      narxi: 9,
      soni: 1,
      like: false
  },
  {
      nomi: "cake",
      turi: "shirinlik",
      narxi: 60,
      soni: 1,
      like: false
  }
];
const prodactsTwo = prodacts;
let boolean = "index < 5";
let index;


//   price array

let priceArray = [];
for(let list of prodacts){
  priceArray.push(list.narxi);
};


//   Add list

function renderProdactList() {
  let result = "";
  index = 0;

  for (let list of prodacts) {
    if(eval(boolean)){
    result += `<div class="tr">
                <div class="box order">${index + 1}</div>
                <div class="box name">${list.nomi}</div>
                <div class="box price">$${list.narxi}</div>
                <div class="box type">${list.turi}</div>
                <div class="box size"><button onclick="minus(${index})" class="minus">-</button><p id="sizeId">${list.soni}</p>
                <button onclick="plus(${index})" class="plus">+</button></div>
                <div class="box like"><i class="fa${list.like ? "" : "r"} fa-heart" onclick="likelist(${index})" ></i></div>
                <div class="box delete"><i class="fa fa-trash" onclick="deleteList(${index})" ></i></div>
              </div>`;
    }
    index++;
  }
  contener.innerHTML = result;
}

renderProdactList();


//   incrument and decrument

function plus(incrumentIndex) {
  let list = prodacts[incrumentIndex];
  list.soni++;
  list.narxi = priceArray[incrumentIndex]*list.soni;

  renderProdactList();
}

function minus(decrumentIndex) {
  let list = prodacts[decrumentIndex];
  list.soni--;
  list.narxi = priceArray[decrumentIndex]*list.soni;

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

menuClassnameAllProdact.addEventListener("click", () => {
  removeClassNameActiveIteam(btns);
  prodacts = prodactsTwo;
  menuClassnameAllProdact.classList.add("active");

  renderProdactList();
});

menuClassnameTaomlar.addEventListener("click", () => {
  removeClassNameActiveIteam(btns);
  let newProdacts = [];
  prodactsTwo.forEach(list => { if(list.turi === "taom") newProdacts.push(list);});
  menuClassnameTaomlar.classList.add("active");
  prodacts = newProdacts;

  renderProdactList();
});

menuClassnameIchimlik.addEventListener("click", () => {
  removeClassNameActiveIteam(btns);
  let newProdacts = [];
  prodactsTwo.forEach(list => { if(list.turi === "ichimlik") newProdacts.push(list);});
  menuClassnameIchimlik.classList.add("active");
  prodacts = newProdacts;

  renderProdactList();
});

menuClassnameShirinlik.addEventListener("click", () => {
  removeClassNameActiveIteam(btns);
  let newProdacts = [];
  prodactsTwo.forEach(list => { if(list.turi === "shirinlik") newProdacts.push(list);});
  menuClassnameShirinlik.classList.add("active");
  prodacts = newProdacts;

  renderProdactList();
});


//   page change

pageOne.addEventListener("click", () => {
  removeClassNameActiveIteam(page);
  boolean = "index < 5";
  pageOne.classList.add("active");

  renderProdactList();
});

pageTwo.addEventListener("click", () => {
  removeClassNameActiveIteam(page);
  boolean = "index > 4";
  pageTwo.classList.add("active");

  renderProdactList();
});


//   remove className active item

function removeClassNameActiveIteam(classNames){
  for(let elemen of classNames){
    elemen.classList.remove("active");
  }
}