let mainSlider = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: {
            el: '.thumb__slider',
            slidesPerView: 5,
            allowTouchMove: false
        }
    }
});























// let mainSlider = new Swiper('.swiper-container', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     direction: 'vertical',
//     autoHeigth: true,
//     thumbs: {
//         swiper: {
//             el: '.thumb__slider',
//             slidesPerView: 4
//         }
//     }
// });
// // const swiper = new Swiper('.swiper-container', {
//     direction: 'vertical',
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });