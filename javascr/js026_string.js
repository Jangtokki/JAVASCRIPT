let data = "It`s alright";
console.log(data);

// length : 문자열의 길이
console.log(data.length);

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1 substring(start, end);
2 substr(start, length);
3 slice(start, end);
*/

data = "Apple, Banana, Kiwi";
//substring( )은 음수값을 지원하지 않는다
console.log(`substring: ${data.substring(7, 13)}`); //7인덱스부터 13인덱스 미만

console.log(`substr: ${data.substr(7, 6)}`);

console.log(`slice: ${data.slice(7, 13)}`);
console.log(`slice: ${data.slice(-12, -6)}`);

//replace('찾을 문자열', '바꿀 문자열')
// i= 대소문자 구분없음
// g= 모든 문자열
console.log(`replac: ${data.replace("Banana", "Grape")}`);

console.log(data);

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/, "red"));

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/g, "red"));

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/gi, "red"));

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/i, "red"));

// 모든 문자열 대문자/소문자로 전환
data = "Hello World";
console.log(`toUpperCase() : ${data.toUpperCase()}`);
console.log(`toLowerCase() : ${data.toLowerCase()}`);

//문자열을 추가 삽입하는 방법
data2 = "javascript";
console.log(`concat() : ${data.concat(data2)}`);
console.log(`concat() : ${data.concat(" ", data2)}`);

console.log(`charAt(): ${data.charAt(0)}`);
console.log(`charAt(): ${data.charCodeAt(0)}`);

data = "a,b,c,d,e";
//split() : 문자열을 나눌때 사용
let arr = data.split(",");
for (let i of arr) console.log(i);

//match : 일치하는 모든 문자값을 가져옴 배열로 맅턴(없으면 null로 리턴)
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

// search : 인텍스 값을 리턴하고 일치하는 문자열이 없으면 -1을 리턴한다
res = data.search(/blue/g);
console.log(`search(): ${res}`);

res = data.search(/red/g);
console.log(`search(): ${res}`);

//////////////////////////////////////////////////////////////

//indexOf( ) : 문자열의 인덱스를 리턴
data = "Mr Blue has a blue house and a blue car";
console.log(data.indexOf("a"));

let position = data.indexOf("blue");
console.log(data.indexOf("blue", position + 1));

/////////////////////////////////////////////////////////////
console.log("===================================");

data = "Mr Blue has a blue house and a blue car";
//let pos = -1;
/*do {
  pos = pos + 1;
  pos = data.indexOf("blue", pos);
  if (pos != -1) console.log(pos);
} while (pos != -1);*/

data = "Mr Blue has a blue house and a blue car";

for (let pos = 0; pos < data.length; pos += 1) {
  pos = data.indexOf("blue", pos);
  if (pos == -1) break;
  {
    console.log(pos);
  }
}

//repeat()
let text = "korea";
console.log(text.repeat(10));

let text2 = "  korea  data  ";
console.log(text2.length);
console.log(text2.trim().length);
