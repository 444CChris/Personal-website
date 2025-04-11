const themeSwapMobile = document.getElementById("theme-swap-mobile")
const themeSwapLinkMobile = document.getElementById("theme-swap-link-mobile")

themeSwapMobile.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


themeSwapLinkMobile.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

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

let slideIndex = 1;
showSlides(slideIndex);

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