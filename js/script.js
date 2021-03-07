const count = 100;
const stage = document.querySelector(".stage .rotate");

for (let i = 0; i < count; i++) {
    setTimeout(() => {
        makeNeon();
    }, 50 * i);
}

function makeNeon() {
    let span = document.createElement("span");
    span.classList.add("s" + gsap.utils.random(1, 2, 1));
    stage.appendChild(span);

    let height = gsap.utils.random(2, 8, 2);
    gsap.set(span, {
        width: gsap.utils.random(50, 300, 10),
        height: height,
        left: gsap.utils.random(-stage.offsetWidth * .3, stage.offsetWidth * .7),
        top: gsap.utils.random(-stage.offsetHeight * .3, stage.offsetHeight * 1.3),
        opacity: 0
    })

    let tl = gsap.timeline({
        paused: true,
        onComplete: () => {
            span.remove();
            makeNeon();
        }
    })

    tl.to(span, {
        opacity: 1,
        duration: .5
    })
    tl.to(span, {
        x: gsap.utils.random(stage.offsetWidth * .7, stage.offsetWidth * .8, 20),
        duration: 7 - height / 2,
        ease: Power0.easeNone
    }, -.5)
    tl.to(span, {
        opacity: 0,
        duration: .5
    }, ">-.5")

    tl.play();
}