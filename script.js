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

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.from(".Destinations-header", {
        opacity: 0,  
        y: -50,  
        duration: 1.2,  
        ease: "power3.out" 
    });

  
    gsap.utils.toArray(".Destinations-item1").forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,  
            y: 100, 
            scale: 0.9, 
            duration: 1,  
            ease: "power3.out",  
            delay: index * 0.2,  
            scrollTrigger: {
                trigger: item,  
                start: "top 80%",  
                toggleActions: "play none none reverse"  
            }
        });
    });
});
gsap.utils.toArray(".Destinations-item1 img").forEach((img) => {
    gsap.to(img, {
        y: -50, 
        ease: "none",
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true, 
        },
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

