//////////////////////////////////////
//내가한거
/*
let total = document.getElementById("total");
let btn1 = document.getElementById("opt1");
btn1.onclick = function () {
  if (btn1.checked) {
    total.value = total.value - btn1.value;
  } else if (!btn.checked) {
    total.value = total.value;
  }
};

let btn2 = document.getElementById("opt2");
btn2.onclick = function () {
  if (btn2.checked) {
    total.value = total.value - btn2.value;
  }
};
let btn3 = document.getElementById("opt3");
btn3.onclick = function () {
  if (btn3.checked) {
    total.value = total.value - btn3.value;
  }
};
*/

/////////////////////////////////////////////
//문제풀이
let totalCar = document.getElementById("total");

//tbody에 있는 input 요소들 중 checkbox인 것을 모두 가져옴
let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt); //Nodelist

//Nodelist를 Array로 반환
let myCnb = [...chbCnt];

//checkbox에 onclick이벤트가 발생되었을때 수행할carCount() 를 등록
myCnb.map((element) => {
  element.onclick = carCount;
});

function carCount() {
  //현재 이벤트가 발생된 checkbox 객체를 나타냄

  let basicCar = Number(totalCar.defaultValue);
  myCnb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
}
