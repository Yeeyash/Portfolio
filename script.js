gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin, ScrollSmoother);

const divv = document.querySelector('aside .aside');

function amounttoscroll(){
    let divWidth = divv.scrollWidth;
    return -(divWidth - window.innerWidth);
}

const mm = gsap.matchMedia();

mm.add("(min-width: 1440px)", () => {

    const tween = gsap.to('aside .aside', {
        x: amounttoscroll,
        // scale:1.2,
        // horizontal: true,
        ease: 'power1.out'
    });

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top top',
        end: () => `+=${amounttoscroll() * -1}`,
        // end: '+=1000px',
        pin: true,
        animation: tween,
        scrub: 1,
        onLeave: () => {
            document.fonts.ready.then(() => {
                let ps = document.querySelectorAll('.innerdiv p');
                ps.forEach(ps => {ps.style.visibility = 'visible'})
                
                let selfsplit = new SplitText('.selftaughtdiv', {type: 'words', wordsClass: 'word++'});
                let selfsplitted = selfsplit.words;

                gsap.set(selfsplitted, {display: 'inline-block'});

                gsap.from(selfsplitted, {
                    stagger: 0.05,
                    // y: -30,
                    // x: '40vw',
                    // rotation: 'random(-30,30)',
                    // textAlign: 'center',
                    ease: 'back.out',
                    autoAlpha: 0,

                    scrollTrigger: {
                        trigger: '.lastcontainer',
                        start: 'top top',
                        end: '+=400px',
                        scrub: 1,
                        // markers: true
                    }
                });

                // gsap.from('.innerdiv', {
                //     ease: 'power3.out',
                //     duration: 1,
                //     border: '10px solid blue',
                //     // fontSize: '10rem',
                //     scrollTrigger: {
                //         trigger: '.lastcontainer',
                //         start: 'top 5%',
                //         end: 'bottom bottom',
                //         toggleActions: 'play none none reverse',
                //         // scrub: 1,
                //         markers: true
                //     }
                // });
                
            })

            // const wordTween = gsap.to('.word1', {
            //     x: '10vw',
            //     ease: 'none'
            // })

            // ScrollTrigger.create({
            //     trigger: '.lastcontainer',
            //     pin: true,
            //     start: 'top top',
            //     end: '+=400px',
            //     scrub: 1,
            //     markers: true
            // })

            gsap.set('.innerdiv', {display: 'flex', visibility: 'visible', backgroundColor: '#730000'});
            document.querySelector('.innerdiv').style.flexGrow = 1;
            document.querySelector('.innerdiv').style.transition = '0.5s ease-out';
            
            


            document.querySelector('.innerdiv blockquote').style.visibility = 'visible';

        
        },
        onEnterBack: () => {
            document.querySelector('.innerdiv').style.flexGrow = 0;
            // selfsplit.revert();
            // selfsplitted.revert();

        },
        invalidateOnRefresh: true,
        // markers: true
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
        // markers: true
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
        // markers: true
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
        // markers: true
    })

    const gsaptween = gsap.to('.pgsap', {
        backgroundPosition: '100% 0%',
        ease: 'power3.out'
    })

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top top',
        end: '+=250px',
        animation: gsaptween,
        onUpdate: () => {
            document.querySelector('.pgsap').style.color = 'linear-gradient(90deg, hsla(60, 56%, 91%, 1) 0%, hsla(81, 24%, 67%, 1) 10%, hsla(86, 21%, 58%, 1) 17%, hsla(90, 22%, 47%, 1) 39%, hsla(99, 44%, 39%, 1) 64%, hsla(101, 63%, 34%, 1) 86%, hsla(104, 99%, 28%, 1) 100%)'
        },
        scrub: 1,
        // markers: true
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
        // markers: true
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
        // markers: true
    })

    const starTween = gsap.to('.star', {
        motionPath: {
            path: '.path',
            autoRotate: true,
            align: '.path',
            alignOrigin: [0.1, 0.1]
        },
        ease: 'none',
        opacity: 1,
        scale: 0.2
    });

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top top',
        end: '+=200px',
        animation: starTween,
        scrub: 1,
        // markers: true
    })

    const eyeTween = gsap.to('.eyeimg', {
        motionPath: {
            path: '.upperPath',
            autoRotate: true,
            align: '.upperPath',
            // alignOrigin: [0.2, -3.5]
        },
        ease: 'none',
        opacity: 1,
        scale: 0.25
    });

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top 10%',
        end: '+=200px',
        animation: eyeTween,
        scrub: 1,
        // markers: true
    })

    const shortinfoTween = gsap.to('.shortinfo', {
        ease: 'power3.out',
        opacity: 1
    })

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top 10%',
        end: '+=400px',
        animation: shortinfoTween,
        scrub: 1,
        // markers: true
    })

    // const lastdivTween = gsap.to('.lastcontainer', {
    //     height: '400vh',
    //     ease: 'none',
    // });

    // ScrollTrigger.create({
    //     trigger: '.lastcontainer',
    //     start: 'center 70%',
    //     end: 'center 20%',
    //     containerAnimation: lastdivTween,
    //     onLeave: () => {
    //         document.querySelector('.lastcontainer').style.height = '75vh';
    //         document.querySelector('.lastcontainer').style.transition = '0.3s ease';
    //     },
    //     scrub: 1,
    //     markers: true
    // })


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
            // markers: true
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
                // markers: true
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
                // markers: true
            }
        })

        
    });

    // document.fonts.ready.then(() => {
    //             let ps = document.querySelectorAll('.innerdiv p');
    //             ps.forEach(ps => {ps.style.visibility = 'visible'})
                
    //             let selfsplit = new SplitText('.selftaughtdiv', {type: 'words', wordsClass: 'word++'});
    //             let selfsplitted = selfsplit.words;

    //             gsap.from(selfsplitted, {
    //                 stagger: 0.05,
    //                 y: -30,
    //                 x: '40vw',
    //                 rotation: 'random(-30,30)',
    //                 // textAlign: 'center',
    //                 ease: 'back.out',
    //                 autoAlpha: 0,

    //                 scrollTrigger: {
    //                     trigger: '.lastcontainer',
    //                     start: 'top top',
    //                     end: '+=400px',
    //                     scrub: 1,
    //                     onLeave: () => {
    //                         document.querySelector('.innerdiv blockquote').style.visibility = 'hidden';
    //                         ps.forEach(ps => {ps.style.visibility = 'hidden'})
    //                     },
    //                     markers: true
    //                 }
    //             })
    //         })

    const lastcontainerTween = gsap.to("aside .lastcontainer .selftaughtdiv", {
        ease: 'none'
    });

    ScrollTrigger.create({
        trigger: 'aside .lastcontainer',
        start: 'top top',
        end: '+=500vh',
        scrub: 1,
        // markers: true
    })

    ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1,
                effects: true,
                normalizeScroll: true
            });

    ScrollTrigger.refresh();
});

mm.add("(min-width: 1024px) and (max-width: 1439px)", () => {
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh(true);
    });
    document.fonts.ready.then(() => {
        let mysplitText = new SplitText(".project", {type:'chars', tag: 'span'});
        let chars = mysplitText.chars;

        const tween = gsap.to('aside .aside', {
        x: amounttoscroll,
        // scale:1.2,
        // horizontal: true,
        ease: 'power1.out'
    });

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top top',
        end: () => `+=${amounttoscroll() * -1}`,
        // end: '+=1000px',
        pin: true,
        animation: tween,
        scrub: 1,
        onLeave: () => {
            document.fonts.ready.then(() => {
                let ps = document.querySelectorAll('.innerdiv p');
                ps.forEach(ps => {ps.style.visibility = 'visible'})
                
                let selfsplit = new SplitText('.selftaughtdiv', {type: 'words', wordsClass: 'word++'});
                let selfsplitted = selfsplit.words;

                gsap.set(selfsplitted, {display: 'inline-block'});

                gsap.from(selfsplitted, {
                    stagger: 0.05,
                    ease: 'back.out',
                    autoAlpha: 0,

                    scrollTrigger: {
                        trigger: '.lastcontainer',
                        start: 'top top',
                        end: '+=400px',
                        scrub: 1,
                        // markers: true
                    }
                });

                
                
            })

           

            gsap.set('.innerdiv', {display: 'flex', visibility: 'visible', backgroundColor: '#730000'});
            document.querySelector('.innerdiv').style.flexGrow = 1;
            document.querySelector('.innerdiv').style.transition = '0.5s ease-out';
            
            


            document.querySelector('.innerdiv blockquote').style.visibility = 'visible';

        
        },
        onEnterBack: () => {
            document.querySelector('.innerdiv').style.flexGrow = 0;
            // selfsplit.revert();
            // selfsplitted.revert();

        },
        invalidateOnRefresh: true,
        // markers: true
        })

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
            // markers: true
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
                // markers: true
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
                // markers: true
            }
        })
        
    });

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
        // markers: true
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
        // markers: true
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
        // markers: true
    })

    const gsaptween = gsap.to('.pgsap', {
        backgroundPosition: '100% 0%',
        ease: 'power3.out'
    })

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top top',
        end: '+=250px',
        animation: gsaptween,
        onUpdate: () => {
            document.querySelector('.pgsap').style.color = 'linear-gradient(90deg, hsla(60, 56%, 91%, 1) 0%, hsla(81, 24%, 67%, 1) 10%, hsla(86, 21%, 58%, 1) 17%, hsla(90, 22%, 47%, 1) 39%, hsla(99, 44%, 39%, 1) 64%, hsla(101, 63%, 34%, 1) 86%, hsla(104, 99%, 28%, 1) 100%)'
        },
        scrub: 1,
        // markers: true
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
        // markers: true
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
        // markers: true
    })

    const starTween = gsap.to('.star', {
        motionPath: {
            path: '.path',
            autoRotate: true,
            align: '.path',
            alignOrigin: [0.1, 0.1]
        },
        ease: 'none',
        opacity: 1,
        scale: 0.2
    });

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top top',
        end: '+=200px',
        animation: starTween,
        scrub: 1,
        // markers: true
    })

    const eyeTween = gsap.to('.eyeimg', {
        motionPath: {
            path: '.upperPath',
            autoRotate: true,
            align: '.upperPath',
            // alignOrigin: [0.2, -3.5]
        },
        ease: 'none',
        opacity: 1,
        scale: 0.25
    });

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top 10%',
        end: '+=200px',
        animation: eyeTween,
        scrub: 1,
        // markers: true
    })

    const shortinfoTween = gsap.to('.shortinfo', {
        ease: 'power3.out',
        opacity: 1
    })

    ScrollTrigger.create({
        trigger: 'aside .aside',
        start: 'top 10%',
        end: '+=400px',
        animation: shortinfoTween,
        scrub: 1,
        // markers: true
    })

    ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1,
                effects: true,
                normalizeScroll: true
            });

});

mm.add("(max-width: 470px)", () => {
    document.querySelector("main h1").textContent = "Machine Learning, Backend Development.";
    document.querySelector("aside .workdone").textContent = "Worked On,";
});