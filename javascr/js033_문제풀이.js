/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/

let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
function getSum(total, num) {
  return total + (num || 0);
}

let sum = arr.reduce(getSum);
console.log(`합계 : ${sum}`);

let sum2 = sum / arr.length;

console.log(`평균 : ${sum2}`);

//total = arr.reduce(function (s, v) {
// return s + (v || 0);
//}, 0);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, '71.67' ],
  [ '이영희', 100, 35, 75, 210, '70.00' ]]
  최고점: 71.67
*/

let arr2 = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

a = arr2[0];
b = arr2[1];

let c;
function getSum2(total, num) {
  return total + (num || 0);
}
let sum3 = a.reduce(getSum2);
console.log(`${sum3}`);
