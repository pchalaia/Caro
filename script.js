var swiper = new Swiper('.swiper-container', {
  loop: true,
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    370: {
      slidesPerView: 1.2, // Ein Slide ist vollständig sichtbar + Teile der nächsten/letzten Slides
      centeredSlides: true,
      spaceBetween: 10, // Abstand zwischen Slides
    },

    768: {
      slidesPerView: 1.2, // Ein Slide ist vollständig sichtbar + Teile der nächsten/letzten Slides
      centeredSlides: true,
      spaceBetween: 20, // Abstand zwischen Slides
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});


const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    // if the nav is closed, open it
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    // if the nav is opened, close it
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
    
})