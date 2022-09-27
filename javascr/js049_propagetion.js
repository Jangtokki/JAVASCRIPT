document.querySelector(".red").onclick = (e) => {
  alert("red");
};

document.querySelector(".green").onclick = (e) => {
  alert("green");
  e.stopPropagation();
};
document.querySelector(".blue").onclick = (e) => {
  console.log(e);
  alert("blue");
  e.stopPropagation();
};

document.querySelector("a").onclick = (e) => {
  alert("안녕");
  e.preventDefault();
  return false;
};
/*
[1] Event propagation (이벤트전파)
캡처링(capturing phase) : 부모요소에서 target요소로 이벤트 전파
버블링(bubbling phase) : target에서 부모요소쪽으로 이벤트 전파

[2] 이벤트 차단
stopPropagation()

[3] stopPropagation() 와 preventDefault() 비교
    stopPropagation() : 이벤트 전파 차단 return false(jQuery ONLY)
    preventDefault() : 다폴트 이벤트 차단 return false(javascript, jQuery)
*/
