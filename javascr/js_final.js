//배너 이미지 슬라이딩

setInterval(function() {
    let tg = document.querySelector(".mainSlide");
    tg.style.top = '-100%';
    tg.style.transition = '0.6s';

    setTimeout(() => {
        let first = tg.querySelectorAll("li")[0];
        tg.appendChild(first);
        tg.style.top = "0";
        tg.style.transition = "none";
    }, 600);
}, 3000);

// 베스트셀러 슬라이드

let bestSeller = document.querySelector('.bestSeller'); //li를 담는 ul 컨테이너
let bestSellerImg = document.querySelectorAll('.bestSeller li'); //슬라이드 이미지 전체
let currentIdx = 0; //슬라이드 index 값

function moveSlide(num){
    bestSeller.style.left = -num*314 + 'px';
    bestSeller.style.transition = '0.5s';
    currentIdx = num;
};

let prev = document.querySelector('.prev'); //이전버튼
let next = document.querySelector('.next'); //다음버튼

prev.addEventListener('click', function(){
    if(currentIdx !==0) moveSlide(currentIdx-1);
});

let slideCount = bestSellerImg.length; //슬라이드 개수

next.addEventListener('click', function(){ //마지막 페이지엔 이미지 3개중 2개만 표시하고 마지막임을 알려줌
    if(currentIdx !== slideCount-2)
        moveSlide(currentIdx+1);
    
});