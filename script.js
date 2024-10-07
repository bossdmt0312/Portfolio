let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (id) {
                    document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                }
            });
        }
    });
};

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        let href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            let targetId = href.substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, 
                    behavior: 'smooth'
                });
            }
        }
    });
});

const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

images[currentIndex].classList.add('active');

function changeImage(index) {
    images[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    changeImage((currentIndex + 1) % images.length);
});

document.getElementById('prev').addEventListener('click', () => {
    changeImage((currentIndex - 1 + images.length) % images.length);
});

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); 
});
