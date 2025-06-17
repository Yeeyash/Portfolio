gsap.registerPlugin(ScrollTrigger);

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
