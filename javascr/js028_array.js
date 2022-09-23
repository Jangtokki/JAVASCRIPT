let scores = [100, 90, 100];
console.log(scores);

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined
console.log(scores.length); //3

let person = ["John", "Doe", 26, "true"];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

let student = ["홍길동", [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}

let cars = new Array("Sasb", "Volvo", "BMW");
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

let color = [];
console.log(color.length); //0
color[0] = "red";
console.log(color.length); //1
color.push("green");
console.log(color.length); //2
color.push("750");
console.log(color.length); //3
color[8] = "blue";
console.log(color.length); //[ 'red', 'green', '750', <5 empty items>, 'blue' ]
console.log(color);
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}
console.log(`==============================`);
////////////////////////////////////////////////////////

//3개 크기의 배열을 생성
let point = new Array(3);
console.log(`point lenght : ${point.length}`); //3

//2개의 요소(각 10, 20)를 갖는 배열을 생성
let shape = new Array(10, 20);
/*console.log(`${idx} : ${shape[idx]}`);
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}*/

shape[2] = 50; //추가
console.log(shape[1]); //요소 가져오기
console.log(shape.length); // 갯수 조회

/*
for()
for ~ in : index
for ~ of : element

*/
//forEach() :배열전용 메소드
//배열.forEach(function(element[, index])(수행할문장));
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});
shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});

/*
let choice = "javascript";
//문자열은 foreach를 제공하지 않으므로 사용할수없다
choice.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});
*/
//배열명.map(callback);
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});

console.log(`res : ${res}`); //8, 18, 32, 50

const sqt = numbers.map(Math.sqrt);
console.log(`sqt: ${sqt}`); //2, 3, 4, 5

function getSum(total, num) {
  //total : 누적, num : 요소
  return total + num;
}

const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`);

const ages = [32, 33, 16, 40];
const per = ages.filter(function (as) {
  return as >= 10;
});
console.log(`per : ${per}`);
