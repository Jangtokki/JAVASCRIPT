let color = ["red", "green", "blue"];
console.log(color[0]); //red
console.log(color[1]); //green
console.log(color[2]); //blue
console.log(color[3]); //undefined

console.log(color.length); //요소의 개수 3

for (let index = 0; index <= 3; index++) {
  console.log(color[index]);
}

//배열에 3 요소 추가
color[3] = "black";
console.log(color.length);

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}

//idx ->
// java : element를 가져옴
// javascript : index를 가져옴
// 객체 리터널 : {property:value, property:value}
let city = ["서울", "부산", "대전"];
for (let idx in city) {
  console.log(city[idx]);
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

for (let prop in obj) {
  console.log(`${prop}:${obj[prop]}`);
  console.log(obj[prop]);
}
