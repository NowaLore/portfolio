
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

function paralax() {
    const preview = document.querySelector('#welcome');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;

    document.addEventListener('mousemove', function(event){
    const mouseX = event.clientX - initialX;
    const mouseY = event.clientY - initialY;

    gsap.to(
        '#avatarImage', 
        {
        x: mouseX * 0.01, 
        y: mouseY * 0.01, 
        ease: 'power2.out' ,
        },);

    gsap.to(
        '#avatarFirstPart', 
        {
        x: -mouseX * 0.0125, 
        y: mouseY * 0.0125, 
        ease: 'power2.out' ,
        },);

    gsap.to(
        '#avatarSecondPart', 
        {
        x: mouseX * 0.015, 
        y: -mouseY * 0.015, 
        ease: 'power2.out' ,
        },);
    }) 

}

paralax()