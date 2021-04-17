    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("navnext", window.scrollY > 0); 
    })

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navr");
    const navr = document.querySelectorAll(".navr li");
        
    burger.addEventListener("click", () => {
        //Toggle Navr
        document.getElementById("navr").classList.toggle("navr1");
        //Hidden Navl
        document.getElementById("navl").classList.toggle("navl1");
        document.getElementsByClassName("lir")[0].classList.toggle("lir1");
        document.getElementsByClassName("lir")[1].classList.toggle("lir1");
        document.getElementsByClassName("lir")[2].classList.toggle("lir1");
        document.getElementsByClassName("lir")[3].classList.toggle("lir1");
        document.getElementsByClassName("lir")[4].classList.toggle("lir1");
        //Animate Links
        navr.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navrFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });    