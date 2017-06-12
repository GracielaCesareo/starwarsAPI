var cargarPagina = function () {
  cargarPersonajes();
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
    $li.text(personaje.name + " - " + personaje.height);
    $ul.append($li)
  });
};

$(document).ready(cargarPagina);
