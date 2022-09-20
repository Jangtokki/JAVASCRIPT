/*
for문
for문은 조건식을 만족할 때까지 특정 실행문을 반복해서 실행한다.

for(초기값; 조건식; 증감식){
    실행문;
}

초기값 -> 조건식(true) -> 실행문 -> 증감식
      -> 조건식(true) -> 실행문 -> 증감식
      -> 조건식(false) -> 반복문 종료
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//for문에서 조건식을 생량하면 무한루프로 돌아간다.
let i = 1,
  sum = 0;
for (; ; i++) {
  sum += i; //1,3,6,10,15,21,28,36
  if (sum >= 30) break;
}
console.log(`${i} ${sum}`);

//1~10 짝수와 홀수의 합을 구해서 출력하는 프로그램 구현

// 출력결과
// 짝수 : ?
// 홀수 : ?

let a = 0;
let b = 0;

for (i = 1; i <= 10; i++) {
  i % 2 == 0;

  if (i % 2 == 0) {
    a += i;
  } else {
    b += i;
  }
}
console.log(`짝수 ${a}, 홀수 ${b}`);

/*
continue: 반복문에서 continue를 만나면 조건식으로 이동한다.
for(초기값; 조건식; 증감식){continue;}
while(조건식){continue;}

*/

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(`${i}`);
}
/* 
    중첩 반복문
    for(초기값; 조건식; 증감식){
    for(초기값; 조건식; 증감식)
    {
    실행문;
 }
}
*/

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    // console.log(`i=${i} j=${j}`);
    process.stderr.write(`i=${i} j=${j},`);
  }
  process.stderr.write("\n");
}
// 이스케이프 : 프로그램에서 주변장치를 컨트롤하기 위해서 사용되는 기능
// \n -> 줄바꿈, \t -> 탭, \" ->, \' ->, \b -> 백스페이스 \v -> 수직탭

//label 정의
movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 20; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i}, j=${j}, k=${k}`);
      if (k == 2) break movei;
    }
  }
}
