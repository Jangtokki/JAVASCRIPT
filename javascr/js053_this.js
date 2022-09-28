//호출한 객체가 없을 경우에는 기본적으로 window객체이다
//console.log(this);

let member = {
  name: "홍길동",
  show: function () {
    console.log(this);
  },
};

//{name: '홍길동', show: ƒ}
member.show();

let member2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};

//window
member2.show();

//////////////////////////////////////////////

function showThisName() {
  console.log(this);
}

//window
showThisName();

let showThisName2 = () => {
  console.log(this);
};

//window
showThisName2();

////////////////////////////////////////////
//이벤트에서 this는 버튼 (객체)
let btn1 = document.querySelector("#btn");
btn1.addEventListener("click", function () {
  console.log(this, this == btn1);
});

//화살표함수에서는 윈도우
let btn2 = document.querySelector("#btn");
btn2.addEventListener("click", () => {
  console.log(this, this == btn2);
});

//////////////////////////////////////////

const hong = { name: "홍길동" };
const jung = { name: "정해인" };
//call() : call메서드는 모든 함수에서 사용할수있으며
//           this값을 특정값으로 지정할 수 있다.

console.log("call()==============");
showThisName.call(hong); //홍길동
showThisName.call(jung); //정해인

showThisName2.call(hong); //window
showThisName2.call(jung); //window

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  console.log(this);
}

update(2019, "IT");

//this로 사용할 hong객체와 update 함수의 매개변수에서 받을 인수를 넘긴다
update.call(hong, 2000, "프로그래머"); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}
update.call(jung, 2000, "프로그래머");

///////////////////////////////////////////////
//apply
// 1 apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다
// 2 call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만
//      apply는 매개변수를 배열로 받는다

console.log("apply()==============");
update.apply(hong, [2000, "프로그래머"]); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}
update.apply(jung, [2010, "디자이너"]); //{name: '정해인', birthYear: 2010, job: '디자이너'}

////////////////////////////////////////////
//bind
// 1 call과 사용방법은 같으나 실행을해야한다

let hongUpdate = update.bind(hong, 2000, "프로그래머");
//{name: '홍길동', birthYear: 2000, job: '프로그래머'}
hongUpdate();
