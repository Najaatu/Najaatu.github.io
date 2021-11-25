// const notice = document.querySelector(".notice-animation");
// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     if(entries[0].intersectionRatio > 0)
//     {
//         entries[0].target.style.animation = `notice-animation 2s ease-out`;
//     }
//     else
//     {
//         entries[0].target.style.animation = 'none'
//     }
// })
// observer.observe(notice);

window.addEventListener("scroll", () => {
    let notice = document.querySelector('.notice-animation');
    let noticePosition = notice.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(noticePosition  < screenPosition){
        notice.classList.add("active-notice");
    }
})