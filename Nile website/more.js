window.addEventListener("scroll", () => {
    let info1 = document.querySelector('.global');
    let info1Position = info1.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(info1Position < screenPosition){
        info1.classList.add("active-global");
    }
})
window.addEventListener("scroll", () => {
    let info2 = document.querySelector('.employability');
    let info2Position = info2.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(info2Position < screenPosition){
        info2.classList.add("active-employability");
    }
})
window.addEventListener("scroll", () => {
    let info3 = document.querySelector('.experience');
    let info3Position = info3.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(info3Position < screenPosition){
        info3.classList.add("active-experience");
    }
})