//////////////////////////////////////////////
//슬라이딩 구현

setInterval(function () {
  let tg = document.querySelector(".slide");
  tg.style.top = "-100%";

  //대상 top값이 -100%으로 0.6초동안 이동됌
  tg.style.transition = "0.6s";

  setTimeout(function () {
    let first = tg.querySelectorAll("li")[0];
    tg.appendChild(first);

    //대상 의 top값이 0으로 이동
    tg.style.top = "0";

    //transition없애기
    tg.style.transition = "none";
  }, 600); //0.6초
}, 3000); //3초

// ////////////////////////////////////////////
//공지사항 및 갤러리

function chgTab(i1, i2) {
  //i1 : class를 넣을 li 순번
  //i2 : class를 뺄 li 순번

  let tm = document.querySelectorAll(".tm>li");
  let tc = document.querySelectorAll(".tc>li");

  //on 클래스 넣기
  tm[i1].classList.add("on");
  tc[i1].classList.add("on");

  //on클래스 빼기
  tm[i2].classList.remove("on");
  tc[i2].classList.remove("on");
}

////////////////////////////////////////
//팝업창 닫기 버튼 클릭

function popup(aa) {
  let pop = document.querySelector(".pop");
  pop.style.display = "aa";
}
