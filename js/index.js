// Burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function() {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
});

// Swiper

const swiper = new Swiper ('.hero__slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
});

// Accordion

new Accordion('.accordion', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

// Search

let search = document.querySelector('.header__btn');
let searchItem = document.querySelector('.header__search')

search.addEventListener('click', function() {

  search.classList.toggle ('header__btn--active')

  searchItem.classList.toggle ('header__search--active')
})

// Tabs

let tabsBtn = document.querySelectorAll('.how-tabs-btn');
let tabsItem = document.querySelectorAll('.how__tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('how__tabs-btn--active')});
    e.currentTarget.classList.add('how__tabs-btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('how-item-tabs--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how-item-tabs--active');
  });
});
