$(function () {
  $("#pButton").click(function (e) {
    logOut();
  });
  $("#buscar").click((e) => {
    buscarPersonaje();
  });
  $("#limpiar").click((e) => {
    limpiar();
  });
  $("#foto").click((e) => {
    cargarFoto();
  });

  $(document).keypress(function (e) {
    if (e.which == 13) {
      buscarPersonaje();
    }
  });
});
function logOut() {
  window.location.href = "index.html";
}
function mostrarHora() {
  momentoactual = new Date();
  hora = (momentoactual.getHours() < 10 ? "0" : "") + momentoactual.getHours();
  minuto =
    (momentoactual.getMinutes() < 10 ? "0" : "") + momentoactual.getMinutes();

  imprimir = hora + " : " + minuto;

  document.getElementById("mostrarHora").innerHTML = imprimir;
}
function traerDatos() {
  $.ajax({
    type: "GET",
    url: `index.html`,
    success: function (responseAPI) {
      console.log(responseAPI);
    },
  });
}
function buscarPersonaje() {
  var id_personaje = $("#input_busqueda").val();
  if (validacion(id_personaje)) {
    getPersonaje(id_personaje);
    $("#input_busqueda").val("");
    $("#input_busqueda").focus();
  }
}
function getPersonaje(id) {
  $.ajax({
    type: "GET",
    url: `https://rickandmortyapi.com/api/character/${id}`,
    success: function (responseAPI) {
      $("#res").append(cargarTabla(responseAPI));
      //$("#foto").append(cargarFoto(responseAPI));
    },
  });
}
function validacion(id) {
  var expresionRegular = /^\d{1,2}$/;

  if (!expresionRegular.test(id)) {
    $("#input_busqueda").focus();
    return false;
  }
  return true;
}
function cargarTabla(pjDatos) {
  var table = `<tr>
    <td>${pjDatos.id}</td>
      <td id="foto">${pjDatos.name}</td>
      <td>${pjDatos.status}</td>
      <td>${pjDatos.species}</td>
      <td>${pjDatos.type}</td>
      <td>${pjDatos.gender}</td>
    </tr>
      `;
  return table;
}

function limpiar() {
  $("#res").empty();
  $("#card").empty();
  $("#input_busqueda").focus();
}
function cargarFoto(pjDatos) {
  var foto = `<div class="foto">
    <div class="contenido"></div>
        <img src=${pjDatos.image}
            alt="">
        <p>${pjDatos.name}</p>
    </div>
</div>`;
  return foto;
}
