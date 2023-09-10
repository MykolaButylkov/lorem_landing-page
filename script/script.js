
const footer = document.querySelector('.footer');
const footerSlider = document.querySelector('.footer__footer-list-slider');
const body = document.querySelector('body');

gsap.registerPlugin(ScrollTrigger);
  gsap.to(footerSlider, {
    x: () => "-=" +
      (footerSlider.clientWidth - window.innerWidth),
    scrollTrigger: {
      trigger: footerSlider,
      start: () => `${footerSlider.clientHeight} ${window.innerHeight}`,
      end: () => `${footerSlider.clientHeight} ${(window.innerHeight - (footerSlider.clientHeight * 2)) }`,
      scrub: 1,
      pin: body,
    }
  });


const footerListDescription = document.querySelectorAll('.footer-list-slider__descr')

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
