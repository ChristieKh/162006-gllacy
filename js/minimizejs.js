var link=document.querySelector(".btn-map"),popup=document.querySelector(".modal-content"),close=popup.querySelector(".modal-content-close");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-content-show"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-content-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-content-show")&&popup.classList.remove("modal-content-show")});