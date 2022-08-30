// Chocolat(document.querySelectorAll('.chocolat-image'), {
//     loop: true,
//     // fullScreen: true,
//     allowZoom: false,

// })

let mql = window.matchMedia("(min-width: 768px)").matches;
console.log(mql)

function agregarGaleria() {
    return document.addEventListener("DOMContentLoaded", function(event) { 
        Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'))
    })
}

if (mql === true) {
    agregarGaleria()
  } else {
    null
  }