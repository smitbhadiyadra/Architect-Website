function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotive()

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.textAnimate(".page1>.hero>.up>h1  ", {
    style: 1,
    y: 10,
    delay: .1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  })

Shery.makeMagnet(".page1>nav a, .page1>nav .logo", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.makeMagnet(".page2>.bottom>.box", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.hoverWithMediaCircle(".page2>.center>.box", {
    images: ["imgs/11.png", "imgs/22.png", "imgs/33.png", "imgs/44.png"],
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



tl = gsap.timeline()

tl.from("nav",{
    y: -100,
    opacity: 0, 
    duration: 1,
}, "a")

tl.from(".page1>.hero>.up>.text",{
    y: 30,
    opacity: 0, 
    duration: .7,
}, "a")

tl.from(".page1>.hero>.up>#first",{
    width: 0,
    opacity: 0, 
    duration: 1,
}, "a")

tl.from(".page1>.hero>.up>#second",{
    // width: 0,
    x: 500,
    opacity: 0, 
    duration: 1,
}, "a")

tl.from(".page1>.hero>.down>.up>.box>.top",{
    height: 0,
    width: 0,
    y: 100,
    opacity: 0, 
    duration: 1,
}, "a")

tl.from(".page1>.hero>.down>.up>.box>p",{
    y: 100,
    opacity: 0, 
    duration: 1,
}, "a")

tl.from(".page1>.hero>.down>.down>.box",{
    y: 100,
    opacity: 0, 
    duration: 1,
}, "a")

tl.from(".page2>.top>p",{
    y: 100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page2>.top>p",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page2>.center>.box",{
    y: 100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page2>.center>.box",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page2>.bottom>.box, .page2>.bottom>p",{
    y: 100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page2>.bottom>.box",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page3>.top",{
    y: 100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page3>.top",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page3>.center .swiper-slide",{
    x: 100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page3>.center .swiper-slide",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page3>.bottom>h3",{
    y: 100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page3>.bottom",
        start: "top 105%",
        end: "bottom 110%",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page4>.container>.box>#first",{
    x: -100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page4>.container>.box>#first",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page4>.container>.box>#second",{
    x: 100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page4>.container>.box>#second",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page4>.container>.box",{
    scale: .8,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page4>.container>.box",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page4>.container>.left>h3, .page4>.container>.left>button",{
    x: -100,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page4>.container>.left>h3",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")

tl.from(".page4>.container>.right>.text",{
    scale: .5,
    opacity: 0, 
    duration: 1,
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page4>.container>.right>.text",
        start: "top 85%",
        end: "bottom bottom",
        // markers: true,
        // scrub: .2
    }
}, "a")


