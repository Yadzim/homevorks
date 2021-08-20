  function totalPoint(green, red, yellow){
  document.querySelector(".inCorrect").innerHTML = yellow;
  document.querySelector(".mistakeAndTimeOut").innerHTML = yellow + red;
  document.querySelector(".percent").innerHTML = Math.floor(green / (yellow + red + green));

  console.log( green, red, yellow);
}

export {totalPoint};