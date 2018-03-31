var cartLink = document.querySelectorAll(".buy")
var cartPopup = document.querySelector(".modal-catalog");
var cartClose = cartPopup.querySelector(".modal-close-cart");

for(var i=0; i < cartLink.length; i++) {
 cartLink[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-cart-show");
});
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});
