//Banner close
var banner = document.getElementById("banner")
var close = document.getElementById("close")
close.addEventListener("click",function(){
    banner.remove()
})
//Selecting Side Navbar, Menu Icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})

//Slider

let currentSlideID = 0; // Index-based (0, 1, 2, 3)

function showSlide() {
    const slider = document.getElementById("slider");
    const slides = slider.getElementsByTagName("li");
    const slideWidth = slides[0].clientWidth;

    slider.style.transform = `translateX(-${currentSlideID * slideWidth}px)`;
}

function next() {
    const slider = document.getElementById("slider");
    const slides = slider.getElementsByTagName("li");

    currentSlideID = (currentSlideID + 1) % slides.length;
    showSlide();
}

function prev() {
    const slider = document.getElementById("slider");
    const slides = slider.getElementsByTagName("li");

    currentSlideID = (currentSlideID - 1 + slides.length) % slides.length;
    showSlide();
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide();
});

window.next = next;
window.prev = prev;
var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="image/redheart.png"
        }
        else{
            e.target.src="image/blackheart.png"
        }
    })
})