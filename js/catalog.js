var cartLink = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-catalog");
var cartClose = cartPopup.querySelector(".modal-close-cart");

cartLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   cartPopup.classList.add("modal-cart-show");
  });
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-cart-show");
  });
