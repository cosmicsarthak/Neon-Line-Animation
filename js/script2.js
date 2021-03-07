const count = 100;
const stage2 = document.querySelector(".stage2 .rotate");

for (let i = 0; i < count; i++) {
    setTimeout(() => {
        makeNeon();
    }, 50 * i);
}

function makeNeon() {
    let span = document.createElement("span");
    span.classList.add("s" + gsap.utils.random(1, 2, 1));
    stage2.appendChild(span);

    let height = gsap.utils.random(2, 8, 2);
    gsap.set(span, {
        width: gsap.utils.random(50, 300, 10),
        height: height,
        left: gsap.utils.random(-stage2.offsetWidth * .3, stage2.offsetWidth * .7),
        top: gsap.utils.random(-stage2.offsetHeight * .3, stage2.offsetHeight * 1.3),
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
        x: gsap.utils.random(stage2.offsetWidth * .7, stage2.offsetWidth * .8, 20),
        duration: 7 - height / 2,
        ease: Power0.easeNone
    }, -.5)
    tl.to(span, {
        opacity: 0,
        duration: .5
    }, ">-.5")

    tl.play();
}