//spread operator = 스프레드 연산자 = 전개연산자 = 펼침연산자
//형태 (...변수)

//[1] 배열에서의 spread operator

//1 배열복사(Array Copy)
let arr1 = [1, 2, 3];
let arr2 = arr1; //얇은복사 (데이터의 주소만 복사해옴)
console.log(`arr1: ${arr1}`); //arr1: 1,2,3
console.log(`arr2: ${arr2}`); //arr2: 1,2,3

arr2.push(4);
console.log(`arr1: ${arr1}`); //arr1: 1,2,3,4
console.log(`arr2: ${arr2}`); //arr2: 1,2,3,4

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; //깊은복사 (데이터 자체를 복사해옴)
console.log(`arr3: ${arr3}`); //arr3: 1,2,3
console.log(`arr4: ${arr4}`); //arr4: 1,2,3

arr3.push(4);
console.log(`arr3: ${arr3}`); //arr3: 1,2,3,4
console.log(`arr4: ${arr4}`); //arr3: 1,2,3

let arr5 = [10, 20, ...arr3];
console.log(`arr5: ${arr5}`); //arr5: 10,20,1,2,3,4

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); //[ 1, 5, 6, [ 7, 8 ] ]
console.log(`=======================================`);
//2. 배열병합 (Array Concatenation)
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10]; //[1, 2, 3, 4, 5,  6, 7, 8, 9 ]
console.log(arr11);
arr11[4] = 15;
//console.log(arr11);
let arr12 = [arr8, arr9, arr10];
console.log(arr12); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
arr10[4] = 15;
console.log(arr12); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9, <1 empty item>, 15 ] ]

console.log(`=======================================`);
//////////////////////////////////////
//[2] 함수에서의 Spread Operator

//1. Rest Parameter(나머지 매게변수)
function display(...params) {
  return params.reduce((sum, a) => {
    return sum + a;
  });
}
console.log(display(1, 2)); //3
console.log(display(1, 2, 3, 4, 5)); //15

//2. 함수호출 인수
console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.min(1, 2, 3, 4, 5)); //1

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(...arr13)); //50

////////////////////////////////
//[3] 객체에서 Spread Operator

//1. 객체복사
let prevState = { name: "고수", age: 30 };
let currentState = { ...prevState }; //복사
console.log(currentState); // { name: '고수', age: 30 }

//뒤에 추가해줌
currentState = { ...prevState, loc: "서울" };
console.log(currentState); //{ name: '고수', age: 30, loc: '서울' }

//2. 객체 업데이트

let prevState2 = { name: "고수", age: 30 };
//prevState2.name = "여진구";
//console.log(prevState2); // { name: '여진구', age: 30 }
// 같은 값일때 자동으로 수정함
prevState2 = { ...prevState2, name: "여진구" };
console.log(prevState2); //{ name: '여진구', age: 30 }
console.log(prevState2);
