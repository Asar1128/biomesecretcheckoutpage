
// can made changes 

var revealElements = document.querySelectorAll(".title_box");
var controller = new ScrollMagic.Controller();
for (var i = 0; i < revealElements.length; i++) {
  var revealTimeline = new TimelineMax();
  revealTimeline.from(revealElements[i], 1, { opacity: -5, y: 100 });
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    triggerHook: "onEnter",
    duration: "100%"
  })
    .setTween(revealTimeline)
    // .addIndicators({ name: ".title_box " + (i + 1) })
    .addTo(controller);
}

