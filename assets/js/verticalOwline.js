// var revealElements = document.querySelectorAll(".title_box");
// var controller = new ScrollMagic.Controller();
// for (var i = 0; i < revealElements.length; i++) {
//   var revealTimeline = new TimelineMax();
//   revealTimeline.from(revealElements[i], 1, { opacity: 0, y: 300});
//   new ScrollMagic.Scene({
//     triggerElement: revealElements[i],
//     triggerHook: "onEnter",
//     duration: "100%"
//   })
//     .setTween(revealTimeline)
//     // .addIndicators({ name: ".title_box " + (i + 1) })
//     .addTo(controller);
// }
// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Get a reference to the line element
var lineElement = document.querySelector(".scroll-line.title_box");

// Create a ScrollMagic scene to change the line's height dynamically
var scene = new ScrollMagic.Scene({
    triggerElement: ".scroll-line.title_box", // The element that triggers the animation
    triggerHook: 0.4, // Trigger when the line is at the center of the viewport
    duration: "100%", // Duration of the animation
})
.on("progress", function (e) {
    // Calculate the new height based on the scroll progress (0% to 100%)
    var newHeight = (e.progress * 600) + "px"; // Adjust the multiplier as needed

    // Set the line's height to the calculated value
    lineElement.style.height = newHeight;
})
.addTo(controller);


