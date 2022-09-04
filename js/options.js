let mql = window.matchMedia("(min-width: 768px)").matches;

function agregarGaleria() {
    return document.addEventListener("DOMContentLoaded", function(event) {
      Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'),
      {loop:true})
    })
}

function mobileGallery() {
  return document.addEventListener("DOMContentLoaded", function(event) {
    Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'),
    {linkImages:false, imageSize: 'contain',fullScreen: true})
  })
}

if (mql === true) {
    agregarGaleria()
  } else {
    mobileGallery()
}

console.log(mql)

// img = document.getElementById("item");

// img.onclick = function() {
//   let img = document.getElementById("item");
//   img.classList.add("makeFullScreen");
// }

