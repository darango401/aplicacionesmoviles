var Splash, Inicio, Mapa, Carta, Carta1, Carta2, Reserva_Sin_Login, Reserva, Login, Registro;
var btn_carta, btn_reserva, btn_mapa, btn_registro, btn_login;
var secciones = [];
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
window.onload = () => {
    crearReferencias();
    agregarEventos();
    setTimeout(() => { irA(Inicio); }, 1000);
}
function crearReferencias() {
    Splash = document.getElementById("Splash");
    Inicio = document.getElementById("Inicio");
    Mapa = document.getElementById("Mapa");
    Carta = document.getElementById("Carta");
    Carta1 = document.getElementById("Carta1");
    Carta2 = document.getElementById("Carta2");
    Reserva_Sin_Login = document.getElementById("Reserva_Sin_Login");
    Reserva = document.getElementById("Reserva");
    Login = document.getElementById("Login");
    Registro = document.getElementById("Registro");
    secciones = [Splash, Inicio, Mapa, Carta, Carta1, Carta2, Reserva_Sin_Login, Reserva, Login, Registro];
    btn_carta = document.getElementById("btn_carta");
    btn_reserva = document.getElementById("btn_reserva");
    btn_mapa = document.getElementById("btn_mapa");
    btn_registro = document.getElementById("btn_registro");
    btn_registrate = document.getElementById("btn_registrate");
    btn_login = document.getElementById("btn_login");
    btn_volver1 = document.getElementById("btn_volver1");
    btn_volver2 = document.getElementById("btn_volver2");
    btn_volver3 = document.getElementById("btn_volver3");
    btn_volver4 = document.getElementById("btn_volver4");
    btn_volver5 = document.getElementById("btn_volver5");
    btn_volver6 = document.getElementById("btn_volver6");
    btn_volver7 = document.getElementById("btn_volver7");
    btn_volver8 = document.getElementById("btn_volver8");
    btn_menu_Siguiente_1 = document.getElementById("btn_menu_Siguiente_1");
    btn_menu_Siguiente_2 = document.getElementById("btn_menu_Siguiente_2");
    btn_menu_Anterior_2 = document.getElementById("btn_menu_Anterior_2");
    btn_menu_Anterior_3 = document.getElementById("btn_menu_Anterior_3");

    Splash.classList.remove("ocultar")
}
function agregarEventos() {
    btn_carta.addEventListener("click", () => { irA(Carta); });
    btn_reserva.addEventListener("click", () => { irA(Reserva); });
    btn_mapa.addEventListener("click", () => { irA(Mapa); });
    btn_registro.addEventListener("click", () => { irA(Registro); });
    btn_registrate.addEventListener("click", () => { irA(Registro); });
    btn_login.addEventListener("click", () => { irA(Login); });
    btn_volver1.addEventListener("click", () => { irA(Inicio); });
    btn_volver2.addEventListener("click", () => { irA(Inicio); });
    btn_volver3.addEventListener("click", () => { irA(Inicio); });
    btn_volver4.addEventListener("click", () => { irA(Inicio); });
    btn_volver5.addEventListener("click", () => { irA(Inicio); });
    btn_volver6.addEventListener("click", () => { irA(Inicio); });
    btn_volver7.addEventListener("click", () => { irA(Inicio); });
    btn_volver8.addEventListener("click", () => { irA(Inicio); });
    btn_menu_Siguiente_1.addEventListener("click", () => { irA(Carta1); });
    btn_menu_Siguiente_2.addEventListener("click", () => { irA(Carta2); });
    btn_menu_Anterior_2.addEventListener("click", () => { irA(Carta); });
    btn_menu_Anterior_3.addEventListener("click", () => { irA(Carta1); });
}
function irA(Seccion) {
    ocultarSecciones();
    Seccion.classList.remove("ocultar")
}
function ocultarSecciones() {
    for (i in secciones) {
        secciones[i].classList.add("ocultar");
    }
}
const expresiones = {
    usuario: /^[a-zA-Z0-9]{4,16}$/,
    nombre: /^[a-zA-z]{3,20}$/,
    apellido: /^[a-zA-z]{2,35}$/,
    contrasena: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    documento: /^[0-9]{8,16}$/
}
const campos = {
    usuario: false,
    apellido: false,
    nombre: false,
    contrasena: false,
    documento: false
}
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "contrasena":
            validarCampo(expresiones.contrasena, e.target, 'contrasena');
            validarContrasena();
            break;
        case "contrasena2":
            validarContrasena();
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "documento":
            validarCampo(expresiones.documento, e.target, 'documento');
            break;
    }
}
const validarContrasena = () => {
    const inputPassword1 = document.getElementById('contrasena');
    const inputPassword2 = document.getElementById('contrasena2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['contrasena'] = false;
    } else {
        document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['contrasena'] = true;
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.usuario && campos.nombre && campos.contrasena && campos.documento && campos.apellido) {
        procesarDatos();
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});


function procesarDatos() {
    fetch('../procesar.php', {
        method: 'post',
        body: new FormData(formulario)
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        guardarLocal(json);
    }).catch(function (err) {
        // Error :(
    });
}
function guardarLocal(json) {
    localStorage.setItem("usuario", JSON.stringify(json));
    //location.href = "index.html";
    irA(Inicio);
}
