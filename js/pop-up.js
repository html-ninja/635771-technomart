var link = document.querySelector(".pop-up");
var popup = document.querySelector(".modal-window");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-window-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-window-show");
});

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-pop-up");
var mapClose = mapPopup.querySelector(".modal-close-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

var cartLink = document.querySelectorAll(".buy")
var cartPopup = document.querySelector(".modal-catalog");
var cartClose = cartPopup.querySelector(".modal-close-cart");

cartLink[0].addEventListener("click", function (evt) {
  evt.preventDefault();
- cartPopup.classList.add("modal-cart-show");
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

cartLink[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-cart-show");
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

cartLink[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-cart-show");
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

cartLink[3].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-cart-show");
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

cartLink[4].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-cart-show");
});
      cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
});

cartLink[5].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-cart-show");
});
      cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
});

cartLink[6].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-cart-show");
});
      cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
});

cartLink[7].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-cart-show");
});
      cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
});

cartLink[8].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-cart-show");
});
      cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
});
