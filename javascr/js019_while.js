/*
while(조건식){
    실행문;
}

while문은 조건식을 생략할 수 없다.

*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

/*
do{
    실행문;
}while(조건식);
*/

let input = "n";
do {
  console.log(`계속하시겠습니까?(y/n)`);
} while (input == "y");
