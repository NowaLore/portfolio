
gsap.from('#hero',{
    y:-400,
    duration:2,
    opacity:0,
    ease:"bounce(1.5)",
})

gsap.from('#avatar',{
    x:400,
    duration:2,
    opacity:0,
    ease:"back.out(1.5)",
})

gsap.from('#about-me__content',{
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger: '#about-me',
        start: 'top 80%',
        end:'65% 70%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
})

gsap.from('[data-skill-card]',{
    stagger:0.2,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '#skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 3,
        toggleActions: 'play none none reverse',
    }
})

gsap.from('[data-project-card]',{
    stagger:0.2,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '#projects',
        start: 'top 40%',
        end:'60% 70%',
        scrub: 3,
        toggleActions: 'play none none reverse',
    }
})