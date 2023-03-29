// Control sections scrollIntoView
function scrollToSection(ele) {

    ele.forEach((span) => {

        span.addEventListener('click', (e) => {

            document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
                behavior: 'smooth'
            });

        });

    });

}
let bulletsSpans = document.querySelectorAll(".ballutes span");
scrollToSection(bulletsSpans);


// Control contact scrollIntoView
document.querySelectorAll("a.special-link").forEach((a) => {

    a.addEventListener('click', (e) => {

        e.preventDefault();

        document.querySelector(".contact").scrollIntoView({
            behavior: 'smooth'
        });

    });

});
