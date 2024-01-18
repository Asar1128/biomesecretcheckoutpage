console.log("running")
// Register ScrollTrigger plugin
// import { gsap } from "gsap";
// gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);
gsap.registerPlugin(ScrollTrigger);

// Define your ScrollSmoother code here if needed

// Rest of your code, including the timeline and animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.accordions',
    pin: false,
    start: 'top center',
    end: 'bottom top',
    scrub: .5,
    ease: 'linear',
    // markers: true,
  }
});

tl.from('.accordion .text', {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: 0.7,
});

tl.from('.accordion', {
  toggleClass: 'red',
  marginBottom: -15,
  stagger: 0.7,
}, '<');
