const frm = document.getElementById('formulario_login');
function procesarLogin() {
    let usuario = localStorage.getItem("usuario");
    if (usuario) {
        fetch('../procesar.php', {
            method: 'post',
            body: new FormData(frm)
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            validarLogin(json);
        }).catch(function (err) {
        });
    }
}
function validarLogin(json) {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario.contrasena == json.contrasena_login) {
        irA(Reserva);
    } else {
        alert("Clave incorrecta");
    }
}