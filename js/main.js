import { menu, menuBtns } from "./Menu/menu.js";
import products from "./Products/Products.js";
import slider from "./Slider/slider.js";

async function allData() {
  await swiper();
  await products();
}
allData();

async function swiper() {
  menu();
  menuBtns();
  slider();
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
