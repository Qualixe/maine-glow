$(document).ready(function () {
  "use strict";
  // navbar js start ---
  $(window).on("load scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 10) {
      $(".navbar").addClass("nav-fixed");
    } else {
      $(".navbar").removeClass("nav-fixed");
    }
  });

  $(".ham-menu").click(function (event) {
    event.stopPropagation();
    $(".nav-link-wrapper").toggleClass("active");
    $(".ham-menu").toggleClass("active");
    $(".nav-link-wrapper-inner").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(".mobile-menu-close-window-btn").click(function (event) {
    event.stopPropagation();
    $(".nav-link-wrapper").toggleClass("active");
    $(".ham-menu").toggleClass("active");
    $(".nav-link-wrapper-inner").toggleClass("active");
    $("body").toggleClass("active");
  });

  // mobile-dropdown responsive accordion js start--
  $(function () {
    let isMobile = window.matchMedia(
      "only screen and (max-width: 992px)"
    ).matches;

    if (isMobile) {
      $(".dropdown-sub-menu").slideUp();
      // **..mobile-dropdown-accordion js start..**
      $(".dropdown-btn1").on("click", function () {
        $(this).next(".dropdown-sub-menu1").slideToggle();
        $(this).toggleClass("active");
      });
      // **..mobile-dropdown-accordion js end..**

      // **..mobile-dropdown-accordion js start..**
      $(".dropdown-btn2").on("click", function () {
        $(this).next(".dropdown-sub-menu2").slideToggle();
        $(this).toggleClass("active");
      });
      // **..mobile-dropdown-accordion js end..**
    }
  });
  // mobile-dropdown responsive accordion js end--

  // navbar js end ---

  // filter sidebar js start--
  $(".filter-open-btn").click(function (event) {
    event.stopPropagation();
    $(".collection-filter").addClass("active");
    $("body").toggleClass("active");
  });

  $(".filter-window-close-btn").click(function (event) {
    event.stopPropagation();
    $(".collection-filter").removeClass("active");
    $("body").toggleClass("active");
  });

  $(".filter-close-btn").click(function (event) {
    event.stopPropagation();
    $(".collection-filter").removeClass("active");
    $("body").toggleClass("active");
  });
  // filter sidebar js end--

  // **..filter-accordion js start..**
  $(".accordion-toggle-btn").on("click", function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
  // **..filter-accordion js end..**

  // **..faq-accordion js start..**
  $(".faq-accordion-toggle-btn").on("click", function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
    $(this)
      .parent()
      .siblings()
      .removeClass("active")
      .find(".faq-accordion-item-content")
      .slideUp();
  });
  // **..faq-accordion js end..**
});

// btn js ---
// primary btn---
$(function () {
  $(".primary-btn")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({
        top: relY,
        left: relX,
      });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({
        top: relY,
        left: relX,
      });
    });
});

// secondary btn--
$(function () {
  $(".secondary-btn")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({
        top: relY,
        left: relX,
      });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({
        top: relY,
        left: relX,
      });
    });
});
// btn js ---

// img-slider1 js start--
var swiper = new Swiper(".img-slider1", {
  grabCursor: false,
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 14,
  loop: true,
  shortSwipes: false,
  longSwipes: false,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
  freeMode: true,
  speed: 5000,
  breakpoints: {
    1: {
      spaceBetween: 5,
      slidesPerView: 3,
      direction: "horizontal",
    },
    576: {
      spaceBetween: 10,
      slidesPerView: 3,
      direction: "horizontal",
    },
    768: {
      spaceBetween: 14,
      slidesPerView: 3,
      direction: "horizontal",
    },
    993: {
      spaceBetween: 14,
      slidesPerView: "auto",
      direction: "vertical",
    },
    1360: {
      spaceBetween: 14,
      slidesPerView: "auto",
      direction: "vertical",
    },
  },
});
// img-slider1 js end--

// img-slider2 js start--
var swiper = new Swiper(".img-slider2", {
  grabCursor: false,
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 14,
  loop: true,
  shortSwipes: false,
  longSwipes: false,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    reverseDirection: true,
  },
  freeMode: true,
  speed: 5000,
  breakpoints: {
    1: {
      spaceBetween: 5,
      slidesPerView: 3,
      direction: "horizontal",
    },
    576: {
      spaceBetween: 10,
      slidesPerView: 3,
      direction: "horizontal",
    },
    768: {
      spaceBetween: 14,
      slidesPerView: 3,
      direction: "horizontal",
    },
    993: {
      spaceBetween: 14,
      slidesPerView: "auto",
      direction: "vertical",
    },
    1360: {
      spaceBetween: 14,
      slidesPerView: "auto",
      direction: "vertical",
    },
  },
});
// img-slider2 js end--

// text-with-img-slider-section js start
var swiper = new Swiper(".text-with-img-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".text-with-img-slider-pagination",
    type: "fraction",
  },
});
// text-with-img-slider-section js end

// instagram-slider js start--
var swiper = new Swiper(".instagram-slider", {
  slidesPerView: 5,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".instagram-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".instagram-swiper-button-next",
    prevEl: ".instagram-swiper-button-prev",
  },
  breakpoints: {
    1: {
      spaceBetween: 5,
      slidesPerView: 2,
      centeredSlides: false,
    },
    576: {
      spaceBetween: 10,
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 3,
      centeredSlides: false,
    },
    993: {
      centeredSlides: true,
      spaceBetween: 16,
      slidesPerView: 2.5,
    },
    1200: {
      centeredSlides: true,
      spaceBetween: 16,
      slidesPerView: 5,
    },
  },
});
// instagram-slider js end--

// gallery-slider js start--
var swiper = new Swiper(".gallery-slider", {
  slidesPerView: 5,
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1: {
      spaceBetween: 5,
      slidesPerView: 1.7,
    },
    576: {
      spaceBetween: 10,
      slidesPerView: 2.5,
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 3.5,
    },
    993: {
      spaceBetween: 16,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 5,
    },
  },
});
// gallery-slider js end--
