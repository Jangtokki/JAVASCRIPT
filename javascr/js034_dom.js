let hNode = document.getElementById("selector");
console.log(hNode);

let hid = document.querySelector("#selector");
console.log(hid, typeof hid);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length);
console.log(pNode[0], pNode.item(0));
console.log(pNode[0].innerText);

pNode[1].style.backgroundColor = "red";

function process() {
  let fname = document.frm.fname;
  console.log("fname:", fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  return false;
}
