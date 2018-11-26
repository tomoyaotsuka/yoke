
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default class mySwiper {
  constructor() {
    return new Swiper('.swiper-container', {
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      speed: 600,
      // width: 400,
      // slidesPerView: 'auto',
      // centeredSlides: true,
      // spaceBetween: 100,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}