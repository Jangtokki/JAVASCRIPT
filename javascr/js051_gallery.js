//(1) 작은 이미지를 클릭하면 큰 이미지가 보이게
let bigPhoto = document.querySelector("#photo > img");
console.log(bigPhoto);

let list_zone = document.querySelector(`#inner_list`);
let ul_li = list_zone.children;
console.log(ul_li); // innerlist의 자식 8개

ul_li = [...ul_li]; //ul_li = Array.from(ul_li) html콜렉션을 배열로 바꿈

ul_li.map((liTag, idx) => {
  let aTag = liTag.querySelector("a");
  aTag.onclick = () => {
    bigPhoto.src = aTag.href;
    return false; // e.preventDefault() 확대 단계를 멈춤
  };
});

//(2) 다음버튼을 눌렀을때 마다  <li> 가 100만큼 왼쪽으로 이동하게
let m_num = 0;

let b_btn = document.querySelector("#next_btn");
b_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false;
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + "px";
  e.preventDefault();
};

//(3) 이전버튼을 눌렀을 때 마다 <li>가 100만큼 이동하게 한다
let before_btn = document.querySelector("#before_btn");
before_btn.onclick = () => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + "px";
  return false;
};
