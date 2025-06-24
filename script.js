gsap.registerPlugin(ScrollTrigger, SplitText);

const divv = document.querySelector('aside .aside');

function amounttoscroll(){
    let divWidth = divv.scrollWidth;
    return -(divWidth - window.innerWidth);
}

const tween = gsap.to('aside .aside', {
    x: amounttoscroll,
    // scale:1.2,
    ease: 'none'
});

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: () => `+=${amounttoscroll() * -1}`,
    // end: '+=1000px',
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true
})

const colortween = gsap.to('.gsapskill', {
    // backgroundImage: 'linear-gradient(135deg, hsla(198, 59%, 82%, 1) 29%, hsla(60, 57%, 91%, 1) 62%, hsla(33, 100%, 88%, 1) 100%)',
    backgroundImage: 'linear-gradient(135deg, hsla(198, 59%, 82%, 1) 15%, hsla(198, 59%, 82%, 1) 23%, hsla(60, 57%, 91%, 1) 52%, hsla(44, 76%, 90%, 1) 76%, hsla(33, 100%, 88%, 1) 100%)',
    ease: 'power1.out'
})

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: '+=400px',
    animation: colortween,
    scrub: true,
    markers: true
})

const goodcolortween = gsap.to('.goodat', {
    backgroundImage: 'linear-gradient(90deg, hsla(198, 59%, 82%, 1) 15%, hsla(198, 59%, 82%, 1) 23%, hsla(60, 57%, 91%, 1) 52%, hsla(44, 76%, 90%, 1) 76%, hsla(33, 100%, 88%, 1) 100%)',
    ease: 'power3.out'
})

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: '+=400px',
    animation: goodcolortween,
    scrub: 1,
    markers: true
})

const goodtween = gsap.to('.pgood', {
    // right: '100px',
    x: '50vw',
    ease: 'power1.out'
})

ScrollTrigger.create({
    trigger: '.shortinfo',
    start: 'top top',
    end: '+=400px',
    animation: goodtween,
    scrub: 1,
    onLeave: () => {
        document.querySelector('.pgood').style.display = 'none'
    },
    onEnterBack: () => {
        document.querySelector('.pgood').style.display = 'block'
    },
    markers: true
})

document.fonts.ready.then(() => {
    let mysplitText = new SplitText(".project", {type:'chars', tag: 'span'});
    let chars = mysplitText.chars;

    const projecttween = gsap.to('.project', {
        rotation: -90,
        x: 600,
        y: '210%',
        // pin: true,
        ease: 'power3.in'
    });

    ScrollTrigger.create({
        trigger: 'main h1',
        start: 'top top',
        end: '+=330px',
        animation: projecttween,
        scrub: 1,
        markers: true
    })

    gsap.from(chars, {
        stagger: 0.05,
        y: 130,
        ease: 'back.out',
        duration: 1,
        scrollTrigger: {
            trigger: 'main h1',
            start: 'top 10%',
            end: '+=1000px',
            scrub: 1,
            markers: true
        }
    })

    let splitLocation = new SplitText(".location, .course", {type: 'chars'});
    let locsplit = splitLocation.chars;

    gsap.from(locsplit, {
        yPercent: 'random([-100, 100])',
        rotation: 'random(-30, 30)',
        ease: 'back.out',
        autoAlpha: 0,
        stagger: {
            amount: 0.5,
            from: 'random',
        },
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '+=300px',
            scrub: 1,
            markers: true
        }
    })
});