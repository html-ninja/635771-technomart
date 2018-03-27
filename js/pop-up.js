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
