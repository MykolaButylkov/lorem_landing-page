'use strict';

const footer = document.querySelector('.footer');
const footerSlider = document.querySelector('.footer__footer-list-slider');
const body = document.querySelector('body');
const btnOff = document.querySelector('.header-top__header-menu-btn');
const btnOn = document.querySelector('.menu-aside__close-btn');
const navLink = document.querySelector('.links-container-list');
const talkMenu = document.querySelector('.menu-aside__talk-btn');
const main =  document.querySelector('.main')

function disableScroll() {
  body.classList.add('disable-scroll');
};

function enableScroll() {
  body.classList.remove('disable-scroll');
};

btnOff.addEventListener('click', e => {
  disableScroll();
});

btnOn.addEventListener('click', e => {
  enableScroll();
});

navLink.addEventListener('click', e => {
  enableScroll();
});

talkMenu.addEventListener('click', e => {
  enableScroll();
});

const footerTl = document.querySelector('.footer__footer-slider-timeline');

gsap.registerPlugin(ScrollTrigger);
function init() {
  gsap.to(footerSlider, {
    // x: () => "-=" +
    //   (footerSlider.clientWidth - window.innerWidth),
    x: () => window.innerHeight < 1000 
      ? "-=" + (footerSlider.clientWidth - window.innerWidth)
      : "-=" + (footerSlider.clientWidth - (window.innerWidth / 1.4)),
    scrollTrigger: {
      trigger: () => footerSlider,
      start: `bottom ${window.innerHeight < 1000 ? 'bottom' : '60%'}`,
      end: () => {
        if (window.innerWidth < 500) {
          return 'bottom center';
        } else {
          return 'bottom top';
        }
      },
      scrub: 1,
      pin: body,
    },
  });
}

window.addEventListener('load', () => {
  init();
});

gsap.to(footerTl, {
  scaleX: () => window.innerWidth < 768 ? `${Math.floor(footerSlider.clientWidth / window.innerWidth)}.45` : 4,
  transformOrigin: 'left',
  scrollTrigger: {
    trigger: () => footerSlider,
      start: `bottom ${window.innerHeight < 1000 ? 'bottom' : '60%'}`,
      end: () => {
        if (window.innerWidth < 500) {
          return 'bottom center';
        } else {
          return 'bottom top';
        }
      },
    scrub: 4,
  }
})

gsap.ticker.add(() => gsap.to(footerTl,
  { duration: 0, x: -gsap.getProperty(footerSlider, 'x') - '110' }))

const footerListDescription = document.querySelectorAll('.footer-list-slider__descr');
const titleTagline = document.querySelector('.header-bottom__tagline');


if (window.innerWidth <= 570) {
  footerListDescription.forEach((el, i) => {
    if (i === 0) {
      el.textContent = 'Lorem ipsum dolor sit amet consectetur. Eget volutpat et sit nunc metus auctor morbi. Lectus auctor ac senectus molestie ut tincidunt sit convallis amet. Nullam quis. ';
    } else if (i === 1) {
      el.textContent = 'Lorem ipsum dolor sit amet consectetur. Eget volutpat et sit nunc metus auctor morbi. Lectus auctor ac senectus molestie ut tincidunt sit convallis amet.';
    } else if (i === 2) {
      el.textContent = 'Lorem ipsum dolor sit amet consectetur. Eget volutpat et sit nunc metus auctor morbi. Lectus auctor ac senectus molestie.';
    } else if (i === 3) {
      el.textContent = 'Lorem ipsum dolor sit amet consectetur. Eget volutpat et sit nunc metus auctor morbi. Lectus auctor ac senectus molestie ut tincidunt sit convallis amet. Nullam quis urna porttitor nulla ipsum ';
    }
  })
}
if (window.innerWidth > 570) {
  titleTagline.textContent = 'Lorem ipsum dolor sit amet consectetur. Diam fames integer ';
}
gsap.to('.about-us__circl-img', {
  rotation: 360,
  scrollTrigger: {
    trigger: '.about-us__circl-img',
    scrub: true,
  }
})

gsap.from('.header-top', {
  y: window.innerWidth > 570 ? '-100%' : '0',
  duration: 1,
});
gsap.from('.header-title-container', {
  x: () => window.innerWidth > 570 ? '-100%' : '0',
  y: () => window.innerWidth < 570 ? '-100%' : '0',
  duration: 1,
});
gsap.from('.header-bottom__img-cards-container', {
  x: () => window.innerWidth > 570 ? '100%' : '0',
  y: () => window.innerWidth < 570 ? '100%' : '0',
  duration: 1,
});
