var cartLink = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-catalog");
var cartClose = cartPopup.querySelector(".modal-close-cart");

for (var i = 0; i < cartLink.length; i++) {
addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-cart-show");
addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-cart-show");
  });
});
}

var bookmarkLink = document.querySelectorAll(".bookmark");
var bookmarkPopup = document.querySelector(".store-nav-bookmarks");

for (var i = 0; i < bookmarkLink.length; i++) {
addEventListener("click", function (evt) {
  evt.preventDefault();
  bookmarkPopup.classList.add("item-added-to-cart");
});
}
