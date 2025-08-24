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


//Product Search Functionality

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productNameElement = productlist[count].querySelector("h1");

        if (productNameElement) {
            var productname = productNameElement.textContent;

            if (productname.toUpperCase().indexOf(enteredValue) < 0) {
                productlist[count].style.display = "none";
            }
            else {
                productlist[count].style.display = "block";
            }
        }
    }
});


//Checkbox
const checkboxes = document.querySelectorAll('.category-checkbox');
    const products = document.querySelectorAll('.product');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const selectedCategories = Array.from(checkboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value);

        if (selectedCategories.length === 0) {
          // If nothing selected, show all
          products.forEach(p => p.style.display = 'block');
        } else {
          products.forEach(product => {
            const isInCategory = selectedCategories.some(cat =>
              product.classList.contains(`category-${cat}`)
            );
            product.style.display = isInCategory ? 'block' : 'none';
          });
        }
      });
    });