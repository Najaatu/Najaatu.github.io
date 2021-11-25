window.addEventListener("scroll", () => {
    let firstbox = document.querySelector('.box-1');
    let firstboxPosition = firstbox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(firstboxPosition < screenPosition){
        firstbox.classList.add("active-box1");
    }
})
window.addEventListener("scroll", () => {
    let secondbox = document.querySelector('.box-2');
    let secondboxPosition = secondbox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(secondboxPosition < screenPosition){
        secondbox.classList.add("active-box2");
    }
})
window.addEventListener("scroll", () => {
    let thirdbox = document.querySelector('.box-3');
    let thirdboxPosition = thirdbox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(thirdboxPosition < screenPosition){
        thirdbox.classList.add("active-box3");
    }
})