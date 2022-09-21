//for ~ of : element를 가져옴
let color = ["red", "green", "blue"];
for (let element of color) {
  console.log(element);
}

let subject = "script";
for (let idx in subject) {
  console.log(idx);
}

for (let element of subject) {
  console.log(element);
}

let obj = { a: 1, b: 2, c: 3 };

for (let value of obj) {
  console.log(value);
}

/*
for ~ of문은 반복 가능한 객체 (Array, String, Map, Set, arguments)를 반복하는 객체
즉, interable 속성을 가진 객체만 가능 */
