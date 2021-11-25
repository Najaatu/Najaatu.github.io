window.addEventListener("scroll", () => {
    let presidentRight = document.querySelector('.president-text');
    let presidentRightPosition = presidentRight.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(presidentRightPosition < screenPosition){
        presidentRight.classList.add("active-src");
    }
})