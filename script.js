let cursor = document.querySelector("#cursor");
let cursor_blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    cursor.style.display = "block";
    cursor_blur.style.display = "block";
    setTimeout(() => {
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";
        // console.log()
        cursor_blur.style.left = dets.x - 150 + "px";
        cursor_blur.style.top = dets.y - 150 + "px";
    }, 180);
});

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scoller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scoller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
});

let h4AllNav = document.querySelectorAll("#nav > h4");
h4AllNav.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursor.style.scale = 4;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });
    element.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border = "none";
        cursor.style.backgroundColor = "#c5ff26";
    });
});

gsap.from("#about-us img, #about-us-info", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        scrub: 1,
        start: "top 70%",
        end: "top 65%",
    }
});

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        scrub: 1,
        start: "top 70%",
        end: "top 65%",
    }
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});


let h2AllPage4 = document.querySelectorAll("#elem");
h2AllPage4.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursor.style.scale = 4;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });
    element.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border = "none";
        cursor.style.backgroundColor = "#c5ff26";
    });
});

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 1,
    },
});