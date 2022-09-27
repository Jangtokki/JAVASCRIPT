//약관동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert("약관에 동의해");
    return false;
  }
};

//전체선택

document.frm.allCheck.onclick = function () {
  //console.log(this.checked);
  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;
  let checkgroup = document.querySelectorAll(".checkgroup");
  //console.log(checkgroup.length);

  //[1]Arrow 함수 이용법 : this는 상위객체인 document.frm.allCheck을 의미함
  /*
  checkgroup.forEach((element) => {
    //console.log(this);
    element.checked = this.checked;
  });
}; */

  let mythis = this; //document.frm.allCheck
  //[2]익명 함수 이용법
  //this는 window객체를 의미함
  /* checkgroup.forEach(function (element) {
    //console.log(mythis);
    element.checked = mythis.checked;
  });*/
  //////////////////////////////////
  //[3]map 이용하기
  //Array.from( ) -> NodeList를 Array로 변경
  /*
  console.log(`${checkgroup}`); //[object NodeList]

  let myArray = Array.from(checkgroup); //Array로 변경
  console.log(`${myArray}`); //[object HTMLInputElement],
  myArray.map(function (element) {
    //console.log(mythis);
    element.checked = mythis.checked;
  }); */

  //////////////////////////////////////
  //[4]spread operator -> 노드리스트를 Array로 변경
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    element.checked = mythis.checked;
  });
};
////////////////////////////////////////
