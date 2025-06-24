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
    backgroundImage: 'linear-gradient(135deg, hsla(198, 59%, 82%, 1) 15%, hsla(198, 59%, 82%, 1) 23%, hsla(60, 57%, 91%, 1) 52%, hsla(44, 76%, 90%, 1) 76%, hsla(33, 100%, 88%, 1) 100%)',
    ease: 'power1.out'
})

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: '+=300px',
    animation: colortween,
    scrub: true,
    markers: true
})

const parenttween = gsap.to('.infocontainer', {
    backgroundImage: 'linear-gradient(135deg, hsla(198, 59%, 82%, 1) 15%, hsla(198, 59%, 82%, 1) 23%, hsla(60, 57%, 91%, 1) 52%, hsla(44, 76%, 90%, 1) 76%, hsla(33, 100%, 88%, 1) 100%)',
    ease: 'power1.out'
})

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: '+=50px',
    animation: parenttween,
    scrub: 1,
    markers: true
})

const goodcolortween = gsap.to('.goodat', {
    backgroundImage: 'linear-gradient(90deg, hsla(198, 59%, 82%, 1) 15%, hsla(198, 59%, 82%, 1) 23%, hsla(60, 57%, 91%, 1) 52%, hsla(44, 76%, 90%, 1) 76%, hsla(33, 100%, 88%, 1) 100%)',
    ease: 'power3.out'
})

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: '+=200px',
    animation: goodcolortween,
    scrub: 1,
    markers: true
})

const gsaptween = gsap.to('.gsapskill', {
    // color: 'linear-gradient(90deg, hsla(60, 56%, 91%, 1) 0%, hsla(81, 24%, 67%, 1) 10%, hsla(86, 21%, 58%, 1) 17%, hsla(90, 22%, 47%, 1) 39%, hsla(99, 44%, 39%, 1) 64%, hsla(101, 63%, 34%, 1) 86%, hsla(104, 99%, 28%, 1) 100%)',
    // document.querySelector('.gsapskill').style.color: 'linear-gradient(to right, blue, yellow, green)',
    ease: 'power3.out'
})

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: '+=250px',
    animation: gsaptween,
    onUpdate: () => {
        document.querySelector('.gsapskill').style.color = 'linear-gradient(90deg, hsla(60, 56%, 91%, 1) 0%, hsla(81, 24%, 67%, 1) 10%, hsla(86, 21%, 58%, 1) 17%, hsla(90, 22%, 47%, 1) 39%, hsla(99, 44%, 39%, 1) 64%, hsla(101, 63%, 34%, 1) 86%, hsla(104, 99%, 28%, 1) 100%)'
    },
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
        document.querySelector('.pgood').style.opacity = 0,
        document.querySelector('.pgood').style.transition = '0.3s ease'
    },
    onEnterBack: () => {
        document.querySelector('.pgood').style.opacity = 1
    },
    markers: true
})

const arttween = gsap.to('.art', {
    backgroundImage: 'linear-gradient(135deg, hsla(21, 100%, 50%, 1) 0%, hsla(32, 100%, 88%, 1) 100%)',
    ease: 'power3.out'
})

ScrollTrigger.create({
    trigger: 'aside .aside',
    start: 'top top',
    end: '+=300px',
    animation: arttween,
    scrub: 1,
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