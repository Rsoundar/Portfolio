document.addEventListener("DOMContentLoaded", () => {
    // ── SCROLL REVEAL ANIMATION ──
    const fadeElements = document.querySelectorAll(".fade-up");
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Once shown, stop observing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach((el) => {
        observer.observe(el);
    });

    // ── NAVIGATION SCROLL EFFECT ──
    const nav = document.querySelector("nav");
    const updateNav = () => {
        if (window.scrollY > 40) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    };
    
    window.addEventListener("scroll", updateNav);
    updateNav(); // Initial check

    // ── MOUSE ORB INTERACTION ──
    const orbs = document.querySelectorAll(".orb");
    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 40;
        const y = (clientY / window.innerHeight - 0.5) * 40;

        orbs.forEach((orb, index) => {
            const factor = (index + 1) * 0.5;
            orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });

    // ── SMOOTH ANCHOR LINKS ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});