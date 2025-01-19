function loading(){
    var tl = gsap.timeline();


tl.to("#yellow", {
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease: "expo.out",
})

tl.to("#loader video", {
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease: "expo.out",
})
tl.to("#loader", {
    display: "none",
    opacity: 0
})

gsap.to("#loader h1", {
    opacity: 0,
    delay: 1.5
})
}

loading();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector("#footer button").addEventListener("click", () => {
    scroll.scrollTo(0)
    
})


var elems = document.querySelectorAll('.elem');
var page2 = document.querySelector("#page2")
elems.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
        var bgImg =ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgImg})`;

})
})