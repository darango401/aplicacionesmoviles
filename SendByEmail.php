<?php
if(isset($_POST['reservar'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "daniel.castillob@upb.edu.co";
$email_subject = "Reserva del restaurante";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['apellido']) ||
!isset($_POST['fecha']) ||
!isset($_POST['hora'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "Apellido: " . $_POST['apellido'] . "\n";
$email_message .= "Fecha: " . $_POST['fecha'] . "\n";
$email_message .= "Hora: " . $_POST['hora'] . "\n";


$email_from = $_POST["correo"];

// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n";
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}

// header("Location: index.html");
?>