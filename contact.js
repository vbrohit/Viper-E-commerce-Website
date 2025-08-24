//Banner close
var banner = document.getElementById("banner")
var close = document.getElementById("close")
close.addEventListener("click", function () {
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