let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset+ height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    });
    Headers.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-contaier, .facilites-box, .course-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h3, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings:['“Education is the key that unlocks the golden door to freedom"',  '“The man who does not read books has no advantage over the one who cannot read them.”—Mark Twain', '“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”—Malcolm X ', '“Teachers can open the door, but you must enter it yourself.”—Chinese proverb', '“The beautiful thing about learning is that no one can take it away from you.”—B.B. King', '“Education is the most powerful weapon you can use to change the world.”—B.B. King', '“The mind is not a vessel to be filled but a fire to be ignited.”—Plutarch',  '“Don’t let what you cannot do interfere with what you can do.” —John Wooden', '“A person who never made a mistake never tried anything new."—Albert Einstein', '“Never let the fear of striking out stop you from playing the game.”—Babe Ruth', '“Procrastination makes easy things hard and hard things harder.” —Mason Cooley', '“You don’t have to be great to start, but you have to start to be great.”–Zig Ziglar',  '“The expert in anything was once a beginner.”—Helen Hayes', ' “The way to get started is to quit talking and begin doing.”–Walt Disney ', '“There are no shortcuts to any place worth going.”—Beverly Stills',  '“I think it’s possible for ordinary people to choose to be extraordinary.” —Elon Musk', '“I find that the harder I work, the more luck I seem to have.” –Thomas Jefferson', '“I find that the harder I work, the more luck I seem to have.” –Thomas Jefferson', '“Motivation is what gets you started. Habit is what keeps you going.” –Jim Ryun', '“Success is the sum of small efforts, repeated.” —R. Collier,'],
    typeSpeed: 80,
    backSpeed: 30,
    delaySpeed: 100,
    loop: true

});
