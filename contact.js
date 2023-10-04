document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".animate-navbar");

    // Apply the final transformation and fade-in effect
    navbar.style.transform = "translateY(0)";
    navbar.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".fade-in");

    function checkElements() {
        animatedElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("active");
            }
        });
    }

    // Initial check when the page loads
    checkElements();

    // Add a scroll event listener to trigger the animation as you scroll
    window.addEventListener("scroll", checkElements);
});