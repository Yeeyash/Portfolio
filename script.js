gsap.registerPlugin(ScrollTrigger);


// gsap.set('.projects-skill-learning', {position: 'absolute'});

// gsap.to('.projects-skill-learning', {
//     yPercent: -100,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: '.projects-skill-learning', 
//         markers: true,
//         start: 'top top',
//         end: '+=1700px',
//         scrub: true,
//         pin: true,
//     }
// })

// gsap.to('.project', {
//     x: -500,
//     y: -200,
//     scrollTrigger: {
//         trigger: '.course',
//         markers: true,
//         start: 'top top',
//         end: '+=200',
//         scrub: true,
//         pin: true
//     }
// })

const divv = document.querySelector('aside .aside');

function amounttoscroll(){
    let divWidth = divv.scrollWidth;
    return -(divWidth - window.innerWidth);
}

const tween = gsap.to('aside .aside', {
    x: amounttoscroll,
    // scale: 2,
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