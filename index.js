window.onload = function () {
  globalThis.usu = [];
  globalThis.pass = [];
  traerDatos(usu, pass);
  console.log(usu);
  console.log(pass);
};

$(function () {
  $("#formId").on("submit", function (event) {
    event.preventDefault();
    validarUsuario(usu, pass);
  });
});

function validacionClave(id) {
  var expresionRegular = /^\d{1,2}$/;
  if (!expresionRegular.test(id)) {
    return false;
  }
  //retorno verdadero si la clave es valida
  return true;
}

function validarUsuario(usuarios, passwords) {
  usuImput = $("#ususario").val();
  passImput = $("#password").val();

  for (var i = 0; i < usuarios.length; i++) {
    if (usuImput == usuarios[i] && passImput == passwords[i]) {
      window.location.href = "principal.html";
    }
  }

  console.log("Paso");
}

function traerDatos(usu, pass) {
  $.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/users`,
    success: function (responseAPI) {
      for (data of responseAPI) {
        usu.push(data.email);
        pass.push(data.id);
      }
      // console.log(usu);
      // console.log(pass);
    },
  });
}

//function traerDatos() {
//  fetch("https://jsonplaceholder.typicode.com/users/")
//    .then((res) => res.json())
//    .then((data) => {
//      let usus = [{}];
//      for (let indice of data) {
//        console.log(indice);
//      }
//    });
//}
//function datosLog() {
//  var email = document.getElementById("ususario").value;
//  var pass = document.getElementById("password").value;
//  console.log(email);
//  console.log(pass);
//}
