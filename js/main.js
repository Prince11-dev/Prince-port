/*==========================================================
        main.js
        Portfolio V4.0
        Princekumar Giri
==========================================================*/

"use strict";

/*==========================================================
                DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializePortfolio();

});

/*==========================================================
                INITIALIZE
==========================================================*/

function initializePortfolio() {

    preloader();

    navbarScroll();

    activeNavigation();

    smoothScrolling();

    mobileNavigation();

    scrollTopButton();

    animateCounters();

    revealSections();

    contactForm();

}

/*==========================================================
                PRELOADER
==========================================================*/

function preloader() {

    const loader = document.getElementById("preloader");

    if (!loader) return;

    document.body.style.overflow = "hidden";

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

            document.body.style.overflow = "";

        }, 500);

    });

}

/*==========================================================
                NAVBAR
==========================================================*/

function navbarScroll() {

    const navbar = document.querySelector(".custom-navbar");

    if (!navbar) return;

    const updateNavbar = () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });

}

/*==========================================================
                ACTIVE NAVIGATION
==========================================================*/

function activeNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    if (!sections.length || !navLinks.length) return;

    const updateActive = () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    };

    updateActive();

    window.addEventListener("scroll", updateActive, {
        passive: true
    });

}

/*==========================================================
                SMOOTH SCROLL
==========================================================*/

function smoothScrolling() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e) {

            const targetID = this.getAttribute("href");

            if (targetID === "#") return;

            const target = document.querySelector(targetID);

            if (!target) return;

            e.preventDefault();

            const navbar = document.querySelector(".custom-navbar");

            const offset = navbar ? navbar.offsetHeight + 15 : 80;

            const position = target.offsetTop - offset;

            window.scrollTo({

                top: position,

                behavior: "smooth"

            });

        });

    });

}

/*==========================================================
                MOBILE MENU
==========================================================*/

function mobileNavigation() {

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbarCollapse &&
                navbarCollapse.classList.contains("show")) {

                bootstrap.Collapse
                    .getOrCreateInstance(navbarCollapse)
                    .hide();

            }

        });

    });

}

/*==========================================================
                SCROLL TO TOP
==========================================================*/

function scrollTopButton() {

    const button = document.getElementById("scrollTop");

    if (!button) return;

    const updateButton = () => {

        if (window.scrollY > 400) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    };

    updateButton();

    window.addEventListener("scroll", updateButton, {
        passive: true
    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==========================================================
                COUNTER ANIMATION
==========================================================*/

function animateCounters() {

    const counters = document.querySelectorAll(".stat-card h2");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const text = counter.textContent.trim();

            if (text.toLowerCase() === "open") return;

            const number = parseInt(text.replace(/\D/g, ""), 10);

            if (isNaN(number)) return;

            const suffix = text.includes("+") ? "+" : "";

            let current = 0;

            const increment = Math.max(1, Math.ceil(number / 40));

            const timer = setInterval(() => {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(timer);

                }

                counter.textContent = current + suffix;

            }, 35);

            observer.unobserve(counter);

        });

    }, {

        threshold: 0.6

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

/*==========================================================
                SECTION REVEAL
==========================================================*/

function revealSections() {

    const sections = document.querySelectorAll("section");

    if (!sections.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("section-visible");

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.classList.add("section-hidden");

        observer.observe(section);

    });

}

/*==========================================================
                BUTTON RIPPLE
==========================================================*/

const buttons = document.querySelectorAll(

".btn-primary-custom, .btn-secondary-custom"

);

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius = diameter / 2;

        circle.style.width =

        circle.style.height =

        `${diameter}px`;

        const rect = this.getBoundingClientRect();

        circle.style.left =
        `${e.clientX - rect.left - radius}px`;

        circle.style.top =
        `${e.clientY - rect.top - radius}px`;
        
        circle.classList.add("ripple");

        const ripple =

        this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*==========================================================
                CONTACT FORM
==========================================================*/

function contactForm() {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const inputs = form.querySelectorAll(

            "input[required], textarea[required]"

        );

        let valid = true;

        inputs.forEach(input => {

            input.classList.remove("is-invalid");

            if (input.value.trim() === "") {

                valid = false;

                input.classList.add("is-invalid");

            }

        });

        if (!valid) {

            showToast(

                "Please complete all required fields.",

                "error"

            );

            return;

        }

        showToast(

            "Thank you! Your message is ready to be connected to EmailJS or Formspree.",

            "success"

        );

        form.reset();

    });

}

/*==========================================================
                TOAST
==========================================================*/

function showToast(message, type) {

    let toast = document.querySelector(".portfolio-toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "portfolio-toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.remove(

        "success",

        "error",

        "show"

    );

    toast.classList.add(type);

    requestAnimationFrame(() => {

        toast.classList.add("show");

    });

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}
/*==========================================================
                EXTERNAL LINKS
==========================================================*/

document.querySelectorAll(

'a[target="_blank"]'

).forEach(link => {

    link.setAttribute(

        "rel",

        "noopener noreferrer"

    );

});

/*==========================================================
                LAZY IMAGE LOADING
==========================================================*/

const lazyImages = document.querySelectorAll(

'img[loading="lazy"]'

);

if ("IntersectionObserver" in window && lazyImages.length) {

    const imageObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            if (img.dataset.src) {

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

            }

            imageObserver.unobserve(img);

        });

    });

    lazyImages.forEach(img => {

        imageObserver.observe(img);

    });

}

/*==========================================================
                NAVBAR SHADOW FIX
==========================================================*/

window.addEventListener(

    "resize",

    () => {

        const navbar = document.querySelector(".custom-navbar");

        if (!navbar) return;

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        }

    },

    {

        passive:true

    }

);

/*==========================================================
                ACCESSIBILITY
==========================================================*/

document.addEventListener(

    "keydown",

    e => {

        if (e.key === "Escape") {

            const collapse = document.querySelector(

                ".navbar-collapse.show"

            );

            if (collapse) {

                bootstrap.Collapse

                .getOrCreateInstance(collapse)

                .hide();

            }

        }

    }

);

/*==========================================================
                PAGE LOADED
==========================================================*/

window.addEventListener(

    "load",

    () => {

        console.log(

            "%cPortfolio Loaded Successfully",

            "color:#E11D48;font-size:16px;font-weight:bold;"

        );

    }

);

/*==========================================================
                PERFORMANCE
==========================================================*/

let resizeTimer;

window.addEventListener(

    "resize",

    () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            window.dispatchEvent(

                new Event("optimizedResize")

            );

        },200);

    }

);

/*==========================================================
                FUTURE FEATURES
==========================================================*/

// EmailJS Integration
// GitHub API Stats
// Project Filtering
// Blog Integration
// Dark/Light Theme Toggle
// Analytics
// Visitor Counter

/*==========================================================
                END OF FILE
==========================================================*/