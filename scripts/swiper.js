new Swiper('.swiper-container')

const swiper = new Swiper('.swiper', {
    loop: true,
            direction: "horizontal",
            spaceBetween: 25,

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

            mousewheel: {
                invert: false,
            },
        
        
   });

