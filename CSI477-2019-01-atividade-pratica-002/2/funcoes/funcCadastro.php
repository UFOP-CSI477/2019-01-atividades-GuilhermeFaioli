<?php
	if(isset($_POST['name']) && isset($_POST['password']) && isset($_POST['email']) && isset($_POST['type']) && isset($_POST['remember_token'])){
		
		require('configBanco.php');
		$today = date_create('now', new DateTimeZone('America/Sao_Paulo'));
		$update = $today->format("Y-m-d H:i:s");
		$created = $today->format("Y-m-d H:i:s");
		
			if($valida = mysqli_query($mysqli, "INSERT INTO users (name, email, password, type, remember_token, created_at, updated_at) VALUES ('$_POST[name]', '$_POST[email]', '$_POST[password]', '$_POST[type]', '$_POST[remember_token]', '$created', '$update')")){
				header('Location: ../areaPaciente.php');
			}else{
				echo "Não foi possivel criar o usuário...<br><a href='../index.php>Index</a>'";
				
			}
	}else{
		header('Location: ../index.php');
	}