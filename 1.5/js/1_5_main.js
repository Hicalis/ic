var showMore = document.querySelector(".expand");
var brands = document.querySelector(".swiper-wrapper");
var showMoreActive = showMore.querySelector(".active");




showMore.addEventListener('click',function (){
    if(showMore.classList.contains("active")){
        brands.style.maxHeight = "350px";
        showMore.textContent = "Скрыть";
        showMore.classList.remove("active");
        showMore.style.backgroundImage = "url('img/expand.svg')";
    }
    else{
        brands.style.maxHeight = "165px";
        showMore.textContent = "Показать все";
        showMore.classList.add("active");
        showMore.style.backgroundImage = "";
    }
})


