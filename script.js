
var tl = gsap.timeline();
tl.from(".line h1", {          
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from(".line1p2", {
  opacity: 0,
  onStart: function () {
    var loaderCount = document.querySelector(".line1p2 h5");
    var grow = 0;
    setInterval(function () {
      if (grow <= 100) {
        loaderCount.textContent = grow++;
      }
    }, 30);
  },
});

tl.to(".loader", {
  opacity: 0,
  duration: 0.3,
  delay: 3.8,
});
tl.from(".page1",{
    y:1600,
    opacity:0,
  duration: 0.5,
  delay:0.2,
    ease:Power4
})
tl.to(".loader",{
    display:"none",
})
