let myNode = document.getElementById("p2");

//parentNode

let ptNode = myNode.parentNode;

console.log(ptNode);
console.log(`parentNode: ${ptNode}`);
//parentNode: [object HTMLDivElement]
ptNode.style.color = "blue";

let prevNode = myNode.previousSibling;
console.log(`prevNode: ${prevNode}`);
//prevNode: [object Text]

prevNode = prevNode.previousSibling;
console.log(`prevNode: ${prevNode}`);
//prevNode: [object HTMLParagraphElement]

///////////////////////////////////

//nextSiling
let nextNode = myNode.nextSibling;
console.log(`nextNode: ${nextNode}`);
nextNode = nextNode.nextSibling;
console.log(`nextNode: ${nextNode}, ${nextNode.innerText}`);

////////////////////////////////////
//nextElementSibling

let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode: ${prevEleNode}, ${prevEleNode.innerText}`); //[object HTMLParagraphElement], content1

////////////////////////////////////
//nextElementSibling

let nextElenode = myNode.nextElementSibling;
console.log(`nextElenode: ${nextElenode}, ${nextElenode.innerText}`); //[object HTMLParagraphElement], content3

///////////////////////////////////
//childNodes

let divNode = document.getElementById("wrap");

console.log(`divNode: ${divNode}`); //[object HTMLDivElement]

let divchildNodes = divNode.childNodes;
console.log(`divchildNodes: ${divchildNodes}`); //divchildNodes: [object NodeList]
console.log(divchildNodes); //NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]

///////////////////////////////////////
//children
let divchildren = divNode.children;
console.log(`divchildren: ${divchildren}`); //divchildren: [object HTMLCollection]
console.log(divchildren); //HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]

console.log(divchildren[0]); //<p id="p1">content1</p>
console.log(divchildren.item(0)); //<p id="p1">content1</p>
console.log(divchildren.namedItem("p1")); //<p id="p1">content1</p>

let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
console.log(aNode); //#text

aNode = pNode.firstElementChild;
console.log(aNode); //<img src="images/gosu.jpg" alt="'영화배우 고수" />

///////////////////////////////////////////
//getAttribute('속성명'), 객체.setAttribute('속성명', '값')
//객체.속성명, 객체.속성명 = 값
let aAttrNode = aNode.getAttribute("src");
console.log(aAttrNode); //images/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode); //http://127.0.0.1:5500/images/gosu.jpg

aNode.setAttribute("title", "스타배우");
console.log(aNode.getAttribute("title")); //스타배우

aNode.id = "imGosu";
console.log(aNode.id); //imGosu
