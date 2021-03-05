var Splash, Inicio, Mapa, Carta, Reserva_Sin_Login, Reserva, Login, Registro;
var btn_carta,btn_reserva, btn_mapa, btn_registro, btn_login;
var secciones = [];

window.onload = () =>{
    crearReferencias();
    agregarEventos();
    setTimeout(()=>{irA(Inicio);},1000);
}
function crearReferencias()
{
    Splash = document.getElementById("Splash");
    Inicio = document.getElementById("Inicio");
    Mapa = document.getElementById("Mapa");
    Carta = document.getElementById("Carta");
    Reserva_Sin_Login = document.getElementById("Reserva_Sin_Login");
    Reserva = document.getElementById("Reserva");
    Login = document.getElementById("Login");
    Registro = document.getElementById("Registro");
    secciones = [Splash, Inicio, Mapa, Carta, Reserva_Sin_Login, Reserva, Login, Registro];
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


    ocultarSecciones();
    Splash.classList.remove("ocultar")
}
function agregarEventos() {
        btn_carta.addEventListener("click",()=>{irA(Carta);});
        btn_reserva.addEventListener("click",()=>{irA(Reserva);});
        btn_mapa.addEventListener("click",()=>{irA(Mapa);});
        btn_registro.addEventListener("click",()=>{irA(Registro);});
        btn_registrate.addEventListener("click",()=>{irA(Registro);});
        btn_login.addEventListener("click",()=>{irA(Login);});
        btn_volver1.addEventListener("click",()=>{irA(Inicio);});
        btn_volver2.addEventListener("click",()=>{irA(Inicio);});
        btn_volver3.addEventListener("click",()=>{irA(Inicio);});
        btn_volver4.addEventListener("click",()=>{irA(Inicio);});
        btn_volver5.addEventListener("click",()=>{irA(Inicio);});
        btn_volver6.addEventListener("click",()=>{irA(Inicio);});
}
function irA(Seccion){
    ocultarSecciones();
    Seccion.classList.remove("ocultar")
}
function ocultarSecciones()
{
    for(i in secciones)
    {
        secciones[i].classList.add("ocultar");
    }
}
function validar(){
    var nombre, apellido, documento, usuario, contrasena;

    nombre = document.getElementById("nombre_registro").value;
    apellido = document.getElementById("apellido_registro").value;
    documento = document.getElementById("documento_registro").value;
    usuario = document.getElementById("usuario_registro").value;
    contrasena = document.getElementById("contrasena_registro").value;

    if(nombre === "" || apellido === "" || documento === "" || usuario === "" || contrasena === ""){
        alert("Todos los campos son obligatorios")
    }else{
        localStorage.nombre = document.getElementById("nombre").value;
        localStorage.apellido = document.getElementById("apellido").value;
        localStorage.documento = document.getElementById("documento").value;
        localStorage.usuario = document.getElementById("usuario").value;
        localStorage.contrasena = document.getElementById("contrasena").value;
    }
}