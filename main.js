

//   DOM element

const number = document.querySelector(".number")
const incrument = document.querySelector(".icrument");
const decrument = document.querySelector(".decrument");
const time = document.querySelector(".time");
const interval = document.querySelector(".interval");
const decSanoq = document.querySelector(".decSanoq");
const incSanoq = document.querySelector(".incSanoq");
const timeSanoq = document.querySelector(".timeSanoq");
const intervalSanoq = document.querySelector(".intervalSanoq");

time.value = 0;
interval.value = 1;
let lastInterval = interval.value;
let lastTime = time.value;

//   function

function minus() {
 setTimeout((m) => {
   number.innerHTML = number.innerHTML- interval.value;
   decSanoq.innerHTML++;
 }, 1000 * +time.value);
  tekshirish();
}

function plus() {
 setTimeout((m) => {
   number.innerHTML = +number.innerHTML + +interval.value;
   incSanoq.innerHTML++;
 }, 1000 * +time.value);
  tekshirish();
}


function tekshirish(){
  if(interval.value != lastInterval){
    intervalSanoq.innerHTML++;
  }
  if(time.value != lastTime){
    timeSanoq.innerHTML++;
  }

  lastInterval = interval.value;
  lastTime = time.value;
}
