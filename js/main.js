const animateElements = document.querySelectorAll(".animate");

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const mainPartnerElementObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, options);

animateElements.forEach(element => {
    mainPartnerElementObserver.observe(element);
});