for(var cartLink=document.querySelectorAll(".buy"),cartPopup=document.querySelector(".modal-catalog"),cartClose=cartPopup.querySelector(".modal-close-cart"),i=0;i<cartLink.length;i++)cartLink[i].addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.add("modal-cart-show")});cartClose.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("modal-cart-show")});var link=document.querySelector(".pop-up"),popup=document.querySelector(".modal-window"),close=popup.querySelector(".modal-close");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-window-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-window-show")});var mapLink=document.querySelector(".map-link"),mapPopup=document.querySelector(".map-pop-up"),mapClose=mapPopup.querySelector(".modal-close-map");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-map-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-map-show")});
