var showMore = document.querySelector(".expand");
var brands = document.querySelector(".swiper-wrapper");
var showMoreActive = showMore.querySelector(".active");

var showMoreType = document.querySelector(".expandType");
var type = document.querySelector(".swiper-wrapperType");
var showMoreActiveType = showMore.querySelector(".activeType");

var buttonAbout = document.querySelector('.outlook__all__readMore');
var buttonAboutText = buttonAbout.querySelector('.outlook__readMore__all__name');
var textAbout = document.querySelector('.outlook__all__text');
var buttonAboutImg = buttonAbout.querySelector('img');

var menuButton = document.querySelector('.menuback__burger');
var menu = document.querySelector('.menu');
var cancelButton = menu.querySelector('.burger');
var bodyScroll = document.querySelector('body');

var callback = menu.querySelector('.chat');
var callbackMenu = document.querySelector('.callback');
var callbackMenuClose = callbackMenu.querySelector('.callback__close');
var callbackMenuback = document.querySelector('.menuback__chat');

var closeCall = menu.querySelector('.call');
var closeCallMenu = document.querySelector('.close-call');
var closeCallMenuClose = closeCallMenu.querySelector('.close-call__close');
var closeCallMenuback = document.querySelector('.menuback__call');

var fog = document.querySelector('.fog');

fog.addEventListener('click', function(){
  fog.style.opacity = "0";
  fog.style.zIndex = "-1";
  closeCallMenu.style.right = '-100%';
  menu.style.left = '-100%';
  callbackMenu.style.right = '-100%';
  bodyScroll.style.overflow = "";
});

callbackMenuback.addEventListener('click', function(){
  fog.style.opacity = "0.9605";
  fog.style.zIndex = "2";
  callbackMenu.style.right = '0%';
  bodyScroll.style.overflow = "hidden";
});

closeCallMenuback.addEventListener('click', function(){
  fog.style.opacity = "0.9605";
  fog.style.zIndex = "2";
  closeCallMenu.style.right = '0%';
  bodyScroll.style.overflow = "hidden";
});

closeCallMenuClose.addEventListener('click', function(){
  fog.style.opacity = "0";
  fog.style.zIndex = "-1";
  closeCallMenu.style.right = '-100%';
  bodyScroll.style.overflow = "";
});

closeCall.addEventListener('click', function(){
  fog.style.opacity = "0.9605";
  fog.style.zIndex = "2";
  closeCallMenu.style.right = '0%';
  bodyScroll.style.overflow = "hidden";
  menu.style.left = '-100%';
});

callbackMenuClose.addEventListener('click', function(){
  fog.style.opacity = "0";
  fog.style.zIndex = "-1";
  callbackMenu.style.right = '-100%';
  bodyScroll.style.overflow = "";
});

callback.addEventListener('click', function(){
  fog.style.opacity = "0.9605";
  fog.style.zIndex = "2";
  callbackMenu.style.right = '0%';
  bodyScroll.style.overflow = "hidden";
  menu.style.left = '-100%';
});


menuButton.addEventListener('click', function(){
  menu.style.left = '0%';
  bodyScroll.style.overflow = "hidden";
  fog.style.opacity = "0.9605";
  fog.style.zIndex = "2";
});

cancelButton.addEventListener('click', function(){
  menu.style.left = '-100%';
  bodyScroll.style.overflow = "";
  fog.style.opacity = "0";
  fog.style.zIndex = "-1";
});

buttonAbout.addEventListener('click', function(){
  if(textAbout.classList.contains('active')){
    textAbout.style.maxHeight = '';
    textAbout.classList.remove("active");
    buttonAboutText.textContent = "Читать далее";
    buttonAboutImg.src = 'img/expand.svg';
  }
  else{
    textAbout.style.maxHeight = '400px';
    textAbout.classList.add('active');
    buttonAboutText.textContent = "Скрыть";
    buttonAboutImg.src = 'img/expand copy.svg';
  }
});

showMore.addEventListener('click',function (){
    if(showMore.classList.contains("active")){
        brands.style.maxHeight = "350px";
        showMore.textContent = "Скрыть";
        showMore.classList.remove("active");
        showMore.style.backgroundImage = "url('img/expand copy.svg')";
    }
    else{
        brands.style.maxHeight = "165px";
        showMore.textContent = "Показать все";
        showMore.classList.add("active");
        showMore.style.backgroundImage = "";
    }
})

showMoreType.addEventListener('click',function (){
    if(showMoreType.classList.contains("activeType")){
        type.style.maxHeight = "360px";
        showMoreType.textContent = "Скрыть";
        showMoreType.classList.remove("activeType");
        showMoreType.style.backgroundImage = "url('img/expand copy.svg')";
    }
    else{
        type.style.maxHeight = "178px";
        showMoreType.textContent = "Показать все";
        showMoreType.classList.add("activeType");
        showMoreType.style.backgroundImage = "";
    }
})

var swiper = new Swiper(".mySwiper", {
    width: 240,
  
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
  768: {
    
    enabled:false
    }
}
});

var swiper = new Swiper(".mySwiperPrice", {
    width: 260,
  
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
  768: {
    
    enabled:false
    }
}
});


// if (window.innerWidth >= 768) {
//     console.log(123);
//     type.style.maxHeight = "178px";
//   } 

