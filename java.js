window.addEventListener("scroll", function(){
    var header  = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

window.addEventListener("scroll", function(){
    var nav  = document.querySelector(".menu");
    nav.classList.toggle("abajo1",window.scrollY>0);
})

let btn = document.querySelector('.icon-up-open');

btn.addEventListener('click', () =>{
    document.body.scrollTo({
        top: 0,
        behavior:"smooth"
    })

    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



