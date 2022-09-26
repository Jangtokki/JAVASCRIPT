let pNode = document.getElementById("wrap");
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);
//1 P null

//속성명을 가져옴
let pAttr = pNode.attributes;
console.log(pAttr); //NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

console.log(pAttr[0]); //id="wrap"
console.log(pAttr.id); //id="wrap"
console.log(pAttr.length); //2

console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
); //2, id, wrap

let pIdAttr = pNode.getAttribute("id");
console.log(pIdAttr); //wrap

let textNode = pNode.firstChild;
console.log(textNode); //content
console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
); //#text, content

/////////////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠

let bodyNode = document.getElementsByTagName("body")[0];
console.log(bodyNode.innerText); //content 텍스트의 노드값
console.log(bodyNode.innerHTML); //html의 로그를 전부 가져옴

//////////////////////////////////////////////
//value

let fname = document.querySelector("#fname");
console.log(fname.value); //홍길동
