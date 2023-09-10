
const footer = document.querySelector('.footer');
const footerSlider = document.querySelector('.footer__footer-list-slider');
const body = document.querySelector('body');

gsap.registerPlugin(ScrollTrigger);
console.log(footerSlider.clientHeight)
console.log(window.innerHeight)
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

