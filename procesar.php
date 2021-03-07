<?php
	$salt = "DDD2098";
	$usuario = array();
	if(isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["usuario"]) && isset($_POST["contrasena"]) && isset($_POST["documento"]) 
		){
			$usuario["nombre"]= $_POST["nombre"];
			$usuario["apellido"]= $_POST["apellido"];
			$usuario["usuario"]= $_POST["usuario"];
			$usuario["documento"]= $_POST["documento"];
			}
	
	$usuario["contrasena"]= md5($salt.$_POST["contrasena"]);
	echo json_encode($usuario);
?>