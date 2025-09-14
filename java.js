const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

var typed = new Typed('#typed', {
  strings: ['Web Developer', 'UI/UX Designer', 'Frontend Specialist', 'Creative Coder'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

const cards = document.querySelectorAll('.project-card');

function revealCards() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const revealPoint = 150; // start showing before fully in view
        if(cardTop < windowHeight - revealPoint){
            card.classList.add('show');
        }
    });
}

// Listen for scroll
window.addEventListener('scroll', revealCards);

// Also run once on page load
revealCards();


const projects = document.querySelectorAll('.project-item');
let current = 0;

document.getElementById('next').addEventListener('click', () => {
  projects[current].classList.remove('active');
  current = (current + 1) % projects.length;
  projects[current].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  projects[current].classList.remove('active');
  current = (current - 1 + projects.length) % projects.length;
  projects[current].classList.add('active');
});

const servicesContainer = document.querySelector(".services-container");
const serviceNext = document.querySelector(".service-next");
const servicePrev = document.querySelector(".service-prev");

const cardWidth = document.querySelector(".service-box").offsetWidth + 20; // card + gap

serviceNext.addEventListener("click", () => {
  servicesContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
});

servicePrev.addEventListener("click", () => {
  servicesContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

