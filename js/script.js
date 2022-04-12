let swiper = new Swiper(".swiper", {
    slidesPerView: 7,
    loop: true,
    navigation: {
        nextEl: ".slider-right",
        prevEl: ".slider-left",
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
            1200: {
                slidesPerView: 7,
          },
          710: {
            slidesPerView: 4,
          }, 
          371: {
            slidesPerView: 2,
          }, 
            100: {
                slidesPerView: 1,
          }
      }  
})


let burger = document.querySelector(".header__burger")

let menu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    menu.classList.toggle("header__burger_list_active")
})


window.addEventListener("scroll", function(){
  if (scrollY >= 100) {
    document.querySelector(".header").classList.add("header__active")
    document.querySelector(".main").classList.add("main__active")
  } else {
    document.querySelector(".header").classList.remove("header__active")
    document.querySelector(".main").classList.remove("main__active")
  }
})