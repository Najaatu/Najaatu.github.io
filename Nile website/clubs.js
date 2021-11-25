window.addEventListener("scroll", () => {
    let events = document.querySelector('.club2');
    let eventsPosition = events.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(eventsPosition < screenPosition){
        events.classList.add("active-club2");
    }
})
window.addEventListener("scroll", () => {
    let sports = document.querySelector('.club3');
    let sportsPosition = sports.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(sportsPosition < screenPosition){
        sports.classList.add("active-club3");
    }
})