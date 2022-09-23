let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`); // number
console.log(`fData=${typeof fData}`); // number
console.log(`nObj=${typeof nObj}`); //object

console.log(typeof nObj.toString()); // string 다른형태를 string문자 형태로 바꿔주는 명령
console.log(typeof data.toString()); // string

console.log(data + fData); //number +  number = 20
console.log(data + nObj); //number + object = 20 연산하면 원래 데이터 형태로 연산됌(숫자)

//Number -> number
//object -> primitive(원시데이터 타입)
console.log(typeof nObj.valueOf()); //number

console.log(typeof new String("111").valueOf());

let val = "10.6A";
console.log(val + val); // 1010

console.log(Number(val) + Number(val)); //20.6
console.log(parseInt(val) + parseInt(val)); //20
console.log(parseFloat(val) + parseFloat(val)); //20.6

console.log(Number.POSITIVE_INFINITY); //무한대값
