// Mobile nav //

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle("nav-open");
})

window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    if (header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
    }
});

/*Clientes */
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

const scrollAmount = () => {
    const galleryWidth = scrollContainer.clientWidth;
    return galleryWidth / 1; // Adjust the scroll amount based on gallery width
};

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += scrollAmount();
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= scrollAmount();
});

//Auto-scroll
const startAutoScroll = () => {
    autoScroll = setInterval(() => {
        scrollContainer.style.scrollBehavior = "smooth";
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = 0; // Volta para o início
        } else {
            scrollContainer.scrollLeft += scrollAmount();
        }
    }, 3000);
};

const stopAutoScroll = () => {
    clearInterval(autoScroll);
};

// Inicia o auto-scroll quando a página carregar
startAutoScroll();

// Para o auto-scroll quando o usuário interagir com a galeria
scrollContainer.addEventListener("mouseenter", stopAutoScroll);
scrollContainer.addEventListener("mouseleave", startAutoScroll);
backBtn.addEventListener("click", stopAutoScroll);
nextBtn.addEventListener("click", stopAutoScroll);
