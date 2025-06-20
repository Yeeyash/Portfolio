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

document.fonts.ready.then(() => {
    let mysplitText = new SplitText(".project", {type:'chars', tag: 'span'});
    let chars = mysplitText.chars;

    const projecttween = gsap.to('.project', {
        rotation: -90,
        x: 600,
        y: '110%',
        // pin: true,
        ease: 'power3.in'
    });

    ScrollTrigger.create({
        trigger: 'main h1',
        start: 'top top',
        end: '+=300px',
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
});