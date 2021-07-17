const signArrey = ["+", "-", "*"];
let sign;

let num1;
let num2;
let s = 0;
let time;

let result;

let addCrkArrey = [];

let variantRAndom1;
let variantRAndom2;
let variantRAndom3;
let variantRAndom4;

function enterBtn() {


    mainFunc();
    addCrkfunc();
    // addCrk();
};


function mainFunc() {


    // enter number
    num1 = Math.floor(Math.random() * 201);
    num2 = Math.floor(Math.random() * 201);
    document.getElementById("number1").innerHTML = num1;
    document.getElementById("number2").innerHTML = num2;

    console.log(num1, num2);


    // ishorani random qilish
    sign = signArrey[Math.floor(Math.random() * 3)];
    document.getElementById("sign").innerHTML = sign;

    console.log(sign);


    // tartib raqam qushish
    s++;
    document.getElementById("modeNum").innerHTML = s;

    if (s === 16) {
        window.location = 'result.html';
    }


    // hisoblash
    switch (sign) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
    }

    console.log(result);


    // variantlarni random qilish
    const idVariantBtn = ["a", "b", "c", "d"];
    let variantRAndom1 = idVariantBtn[Math.floor(Math.random() * 4)];

    if (variantRAndom1 === "a") {
        variantRAndom2 = "b";
        variantRAndom3 = "c";
        variantRAndom4 = "d";
    } else if (variantRAndom1 === "b") {
        variantRAndom2 = "a";
        variantRAndom3 = "d";
        variantRAndom4 = "c";
    } else if (variantRAndom1 === "c") {
        variantRAndom2 = "b";
        variantRAndom3 = "a";
        variantRAndom4 = "d";
    } else {
        variantRAndom2 = "b";
        variantRAndom3 = "c";
        variantRAndom4 = "a";
    }


    // variantlarni kiritish
    document.getElementById(`${variantRAndom1}`).innerHTML = result;
    document.getElementById(`${variantRAndom2}`).innerHTML = (result + Math.floor(Math.random() * 101 + 1));
    document.getElementById(`${variantRAndom3}`).innerHTML = (result - Math.floor(Math.random() * 101 + 1));
    document.getElementById(`${variantRAndom4}`).innerHTML = (result * Math.floor(Math.random() * 5 + 2) + 1);

    console.log(variantRAndom1, variantRAndom2, variantRAndom3, variantRAndom4);




}

mainFunc();



// shar qo'shish
function addCrkfunc() {
    let addGreenCrk = '<div class="crk"></div>';
    let addRedCrk = '<div class="crk crk2"></div>';

    if (document.querySelector('.variantBox').innerHTML == result)
        addCrkArrey.push(addGreenCrk);
    else
        addCrkArrey.push(addRedCrk);

    document.getElementById('result').innerHTML = addCrkArrey;
    console.log(addCrkArrey);
}

// yana bir varianti
// function addCrk(){
//     document.getElementById(`${variantRAndom1}`).addEventListener("click", () => {addCrkArrey.push(addGreenCrk);});
//     document.getElementById(`${variantRAndom2}`).addEventListener("click", () => {addCrkArrey.push(addRedCrk);});
//     document.getElementById(`${variantRAndom3}`).addEventListener("click", () => {addCrkArrey.push(addRedCrk);});
//     document.getElementById(`${variantRAndom4}`).addEventListener("click", () => {addCrkArrey.push(addRedCrk);});
// }
// addCrk();


// // shar qo'shish
// let addGreenCrk = '<div class="crk"></div>';
// let addRedCrk = '<div class="crk crk2"></div>';
// console.log(click1);

// function addCrk(){
//     let click1 = document.getElementById('result').innerHTML;
//     click1.addEventListener("click", addCrkfunc);
// }



//     if (document.querySelector('.variantBox').innerHTML == result)
//         addCrkArrey.push(addGreenCrk);
//     else
//         addCrkArrey.push(addRedCrk);

// document.getElementById('result').innerHTML = addCrkArrey;
// console.log(addCrkArrey);
// }

// addCrk();



// document.getElementById('a').addEventListener("click", () => {
//     if(document.getElementById('a').innerHTML == result)
//         addCrkArrey.push(addGreenCrk);
//     else
//         addCrkArrey.push(addRedCrk);
// });
// document.getElementById('b').addEventListener("click", () => {
//     if(document.getElementById('b').innerHTML == result)
//         addCrkArrey.push(addGreenCrk);
//     else
//         addCrkArrey.push(addRedCrk);
// });
// document.getElementById('c').addEventListener("click", () => {
//     if(document.getElementById('c').innerHTML == result)
//         addCrkArrey.push(addGreenCrk);
//     else
//         addCrkArrey.push(addRedCrk);
// });
// document.getElementById('d').addEventListener("click", () => {
//     if(document.getElementById('d').innerHTML == result)
//         addCrkArrey.push(addGreenCrk);
//     else
//         addCrkArrey.push(addRedCrk);
// });


// document.getElementById('result').innerHTML = addCrkArrey;
//     console.log(addCrkArrey);