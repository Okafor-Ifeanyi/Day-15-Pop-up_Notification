const popup = document.getElementById('#popup');
// const love = document.querySelectorAll('.fa-heart')

// love.addEventListener('click', dark)

// love.forEach(())
// function dark() {
//     love.forEach((userItem) => {
//         userItem.classList.toggle('fa-solid')
//     });
// }
function openPopup() {
    popup.classList.add('open-popup');
}
function closePopup() {
    popup.classList.remove('open-popup');
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 40,
    // loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        720: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
  });