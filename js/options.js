Chocolat(document.querySelectorAll('.chocolat-image'), {
    loop: true,
    // fullScreen: true,
    allowZoom: false,

})

if (window.matchMedia("(min-width: 768px)").matches) {
    return document.addEventListener("DOMContentLoaded", function(event) { 
        Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'))
    })
  } else {
    /* La pantalla tiene menos de 400 píxeles de ancho */
  }