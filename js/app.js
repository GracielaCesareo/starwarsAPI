var cargarPagina = function () {
  cargarPersonajes();
};

var cargarPersonajes = function () {
  $.ajax('http://swapi.co/api/people/', {
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      var personajes = response.results;
      var total = response.count;
      mostrarTotalPersonajes(total);
      mostrarPersonajes(personajes)
    },
    error: function (error) {
        console.log("error", error);
    }
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
