// navigation- toggal-start 

function toggleMenu(event) {
    event.stopPropagation(); // Prevent event from bubbling up
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

function closeMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    }
}
// navigation-toggal-end 

// count-section 

AOS.init({
    duration: 1000,
    once: true,
});

function animateCountUp(element, target) {
    let count = 0;
    let increment = target / 100;
    let interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(count);
    }, 20);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".count-item").forEach(item => {
        let target = parseInt(item.getAttribute("data-target"));
        animateCountUp(item, target);
    });
});

// count-end 


