
const footer = document.querySelector('.footer');
const image = document.querySelector('.footer__footer-slider');
const body = document.querySelector('body');

gsap.registerPlugin(ScrollTrigger);
// -2062px
console.log(image.clientHeight)
console.log(window.innerHeight)
if (window.innerWidth > 768) {
  gsap.to(image, {
    x: () => "-=" +
      (image.clientWidth - window.innerWidth),
    scrollTrigger: {
      trigger: image,           // Element that triggers the animation
      start: () => `${image.clientHeight} ${window.innerHeight}`,
      end: () => `${image.clientHeight} ${(window.innerHeight - (image.clientHeight * 6)) }`,
      markers: true,    // Start position of the trigger element
      scrub: 1,
      pin: body,
    }
  });
} else {
  gsap.to(image, {
    x: () => "-=" +
      (image.clientWidth - window.innerWidth),
    scrollTrigger: {
      trigger: image,           // Element that triggers the animation
      start: "top 90%",
      end: "bottom 70%",
      markers: true,    // Start position of the trigger element
      scrub: 1,
      pin: body,
    }
  });
}
