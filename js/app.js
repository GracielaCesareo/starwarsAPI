var cargarPagina = function () {
  cargarPersonajes();
  $(document).on("click", ".personaje", mostrarDetalle);
};

var cargarPersonajes = function () {
  var url = 'http://swapi.co/api/people/';
  $.getJSON(url, function (response) {
    var personajes = response.results;
    var total = response.count;
    mostrarTotalPersonajes(total);
    mostrarPersonaje(personajes);
  });

};

var mostrarTotalPersonajes = function () {
  $("#total").text(total);
}

var mostrarPersonaje = function (personajes) {
  var $ul = $("#personajes");
  personajes.forEach(function (personaje) {
    var $li = $("<li />");
    $li.addClass("personaje");
    $li.attr("data-url", personaje.homeworld);
    $li.text(personaje.name + " - " + personaje.height);
    $ul.append($li)
  });
};

var plantillaPlaneta = '<h2>Planeta:</h2>' +
'<p>Nombre:<strong>__nombre__</strong></p>' +
'<p>Clima:<strong>__clima__</strong></p>'

var mostrarDetalle = function () {
  var url = $(this).data("url");
  var $planetaContenedor = $("#planeta");
  $.getJSON (url, function (response) {
    $planetaContenedor.html(
      plantillaPlaneta.replace('__nombre__', response.name)
        .replace('__clima__', response.climate)
    );
  });
}


$(document).ready(cargarPagina);
