  let prevScrollPos = window.pageYOffset;
        const navbar = document.querySelector(".nav");

        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                navbar.style.top = "0";
            } else {
            
                navbar.style.top = "-80px"; 
            }

            prevScrollPos = currentScrollPos;
        };
      

const mouseElement = document.querySelector(".mouse");


window.onload = function() {
    setTimeout(() => {
        mouseElement.classList.add("shake");
    }, 500); 
};


mouseElement.addEventListener("animationend", () => {
    mouseElement.classList.remove("shake");
});


mouseElement.addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight, 
        left: 0,
        behavior: 'smooth'
    });
});


  

document.querySelectorAll(".Destinations-item1").forEach((item) => {
    item.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});

