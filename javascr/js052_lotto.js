//1 6개의 난수를 구하고 중복체크

let lotto = [];
for (let i = 0; i <= 5; i++) {
  let ran = Math.random() * 45;
  ran = Math.floor(ran) + 1; //1~45

  lotto.push(ran);

  for (j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break;
    }
  }
}

//2 정렬

lotto.sort((a, b) => {
  return a - b;
});

//3 출력

let divList = document.querySelectorAll("div.wrap div");

console.log(divList);
divList.forEach((element, idx) => {
  element.innerText = lotto[idx];
});
