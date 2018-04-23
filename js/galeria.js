$('.galeria-img').click(function(e){
  var img = e.target.src;
  var galeria = '<div class="ventana-galeria" id="ventana-galeria"><div class="imagen-abierta"><span class="icon-arrow-left"></span><a href=""><img src="'+ img +'" alt="Calavera"></a><span class="icon-arrow-right"></span></div><span class="icon-cross cerrar" id="cerrar"></span></div>';
  $('#ilustracion').append(galeria);
  $('#cerrar').click(function(){
    $('#ventana-galeria').remove();
  })
});
$(document).keyup(function(e){
  if (e.which==27) {
    $('#ventana-galeria').remove();
  }
})

