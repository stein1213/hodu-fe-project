const scrollUp = document.getElementById("scroll-btn-hover");
scrollUp.addEventListener('click', () => {
    window.scrollTo(0, 0)
})
const scrollBtn = document.getElementById("scroll-btn");
window.addEventListener("scroll",()=>{
    if (document.documentElement.scrollTop > window.innerHeight * 0.5) {
        scrollBtn.style.display="block"}
    else {scrollBtn.style.display="none"}
})
