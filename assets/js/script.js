// Theme Toggle implementation
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.getAttribute('data-theme');
    
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    // Toggle icon between sun and moon
    themeIcon.className = newTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    
    localStorage.setItem('theme', newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            themeIcon.className = newTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    });
});

// Preloader
const loader = document.querySelector('.loaderDiv')

window.onload = function () {
    loader.style.display = 'none'
}



// Active nav
const navLinks = document.querySelectorAll('nav ul li a')
navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        navLinks.forEach((link) =>{link.classList.remove('active-link')})
        link.classList.add('active-link')
    })
})

// Active nav based on scroll
const sections = document.querySelectorAll("section");

// Add scroll event listener
window.addEventListener("scroll", () => {
  let current = "";

  // Determine the current section in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });

  // Remove active class from all links and add it to the current one
  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});


// Header responsiveness
// const headerNav = document.querySelector("header nav"),
// hideMenu = document.querySelector(".hideNavMenu"),
// showMenu = document.querySelector(".showNavMenu");

// showMenu.addEventListener("click", ()=>{
//     headerNav.style.width = "180px";
//     headerNav.setAttribute("cl", "fade-left")
//     headerNav.classList.add("animate__animated")
//     headerNav.classList.add("animate__fadeInRight")
// })

// hideMenu.addEventListener("click", ()=>{
//     headerNav.style.width = "0px";
// })

// Header responsiveness
const headerNav = document.querySelector("header nav"),
    hideMenu = document.querySelector(".hideNavMenu"),
    showMenu = document.querySelector(".showNavMenu"),
    overlay = document.querySelector(".nav-overlay");

function openMenu() {
    headerNav.style.width = "250px";
    headerNav.classList.add("animate__animated", "animate__fadeInRight");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    headerNav.style.width = "0px";
    headerNav.classList.remove("animate__animated", "animate__fadeInRight");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

showMenu.addEventListener("click", openMenu);
hideMenu.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Close menu when clicking nav links on mobile
const mobileNavLinks = headerNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


// swiper animation styles
new Swiper('.portfolio-wrapper', {
    loop: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
    },

    autoplay:{
        delay:2000,
        pauseOnMouseEnter: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
});


// get date
const currentDate = new Date().getFullYear();
const footerDate = document.querySelector(".footerDate");
footerDate.textContent = currentDate;