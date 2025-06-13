gsap.registerPlugin(ScrollTrigger);


gsap.set('.projects-skill-learning', {position: 'absolute'});

gsap.to('.projects-skill-learning', {
    yPercent: -100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.projects-skill-learning',
        markers: true,
        start: 'top top',
        end: '+=1700px',
        scrub: true,
        pin: true,
    }
})