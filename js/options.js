let mql = window.matchMedia("(min-width: 768px)").matches;

function desktopGallery() {
    return document.addEventListener("DOMContentLoaded", function(event) {
      Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'),
      {loop:true})
    })
}

function mobileGallery() {
  return document.addEventListener("DOMContentLoaded", function(event) {
    Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'),
    { loop:true,imageSize: 'contain',allowZoom: false})
  })
}

if (mql === true) {
    desktopGallery()
  } else {
    mobileGallery()
}

console.log(mql)

// img = document.getElementById("item");

// img.onclick = function() {
//   let img = document.getElementById("item");
//   img.classList.add("makeFullScreen");
// }

