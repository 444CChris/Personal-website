let darkmode = localStorage.getItem('darkmode')
const themeSwap = document.getElementById("theme-swap")
const themeSwapLink = document.getElementById("theme-swap-link")
const favicon = document.getElementById("favicon")


themeSwap.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

let slideIndex = 1;
showSlides(slideIndex);
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    favicon.setAttribute("href", "../assets/Dark Logo(1).png")
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode= () => {
    document.body.classList.remove('darkmode')
    favicon.setAttribute("href", "../assets/Sun Logo.png")
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwapLink.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
} 