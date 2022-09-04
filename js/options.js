let mql = window.matchMedia("(min-width: 768px)").matches;

function agregarGaleria() {
    return document.addEventListener("DOMContentLoaded", function(event) {
      Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'),
      {loop:true})
    })
}

if (mql === true) {
    agregarGaleria()
  } else {
    null
}

console.log(mql)

// img = document.getElementById("item");

// img.onclick = function() {
//   let img = document.getElementById("item");
//   img.classList.add("makeFullScreen");
// }

