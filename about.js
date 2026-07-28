// About page scroll reveal

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(
        ".hero-section, .impact-section"
    );

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
});

// Animated percentage statistics
const percentageStats = document.querySelectorAll(".stat-item strong");

const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.textContent);

                let current = 0;
                const duration = 1500;
                const increment = target / (duration / 16);

                const counter = setInterval(() => {
                    current += increment;

                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }

                    element.textContent = Math.floor(current) + "%";
                }, 16);

                statsObserver.unobserve(element);
            }
        });
    },
    {
        threshold: 0.5
    }
);

percentageStats.forEach((stat) => {
    if (stat.textContent.includes("%")) {
        statsObserver.observe(stat);
    }
});