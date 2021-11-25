window.addEventListener("scroll", () => {
    let faculty = document.querySelector('.column1-row1-animation');
    let facultyPosition = faculty.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(facultyPosition  < screenPosition){
        faculty.classList.add("active-faculty");
    }
})
window.addEventListener("scroll", () => {
    let faculty3 = document.querySelector('.column1-row2-animation');
    let faculty3Position = faculty3.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty3Position  < screenPosition){
        faculty3.classList.add("active-faculty3");
    }
})
window.addEventListener("scroll", () => {
    let faculty5 = document.querySelector('.column1-row3-animation');
    let faculty5Position = faculty5.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty5Position  < screenPosition){
        faculty5.classList.add("active-faculty5");
    }
})
window.addEventListener("scroll", () => {
    let faculty2 = document.querySelector('.column2-animation1');
    let faculty2Position = faculty2.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty2Position  < screenPosition){
        faculty2.classList.add("active-faculty2");
    }
})
window.addEventListener("scroll", () => {
    let faculty4 = document.querySelector('.column2-animation2');
    let faculty4Position = faculty4.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty4Position  < screenPosition){
        faculty4.classList.add("active-faculty4");
    }
})
window.addEventListener("scroll", () => {
    let faculty6 = document.querySelector('.column2-animation3');
    let faculty6Position = faculty6.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty6Position  < screenPosition){
        faculty6.classList.add("active-faculty6");
    }
})