<?php
	if(isset($_POST['name']) && isset($_POST['price'])){
		
		require('configBanco.php');
		$today = date_create('now', new DateTimeZone('America/Sao_Paulo'));
		$update = $today->format("Y-m-d H:i:s");
		$created = $today->format("Y-m-d H:i:s");
		
			if($valida = mysqli_query($mysqli, "INSERT INTO procedures (name, price, created_at, updated_at) VALUES ('$_POST[name]', '$_POST[price]', '$created', '$update')")){
				//header('Location: ../areaPacienteLogado.php');
				echo "funcionou";
			}else{
				echo "Não foi possivel criar o usuário...<br><a href='../index.php>Index</a>'";
				
			}
	}else{
		header('Location: ../index.php');
	}