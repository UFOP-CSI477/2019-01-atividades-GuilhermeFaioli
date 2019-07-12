<?php
	if(isset($_POST['email']) && isset($_POST['password'])){
		require('configBanco.php');

		$queryUser1 =  mysqli_query($mysqli, "SELECT * FROM users WHERE email = '$_POST[email]' AND password = '$_POST[password]' LIMIT 1");
		if(mysqli_num_rows($queryUser1) != 0){
			if($queryUser = mysqli_fetch_assoc($queryUser1)){
				if($queryUser['type']==1){
					echo $queryUser['name'].', você logou <br/><a href="../areaPacienteLogado.php">Continuar</a>';
					header('Location: ../areaPacienteLogado.php');
				} else{
					echo $queryUser['name'].', você logou como Adiministrador!<br/><a href="../areaPacienteLogado.php">Continuar</a>';
					header('Location: ../areaPacienteLogado.php');
				}
				
			}else{
				echo 'Nenhum usuário com esses dados';
				echo "<br><a href='../index.php'>Index</a>'";
			}
		}else{
			echo 'Nenhum usuário cadastrado com esses dados.';
			echo "<br><a href='../index.php'>Index</a>'";
		}
	
	}else{
		//return false;
		echo 'Erro no if';
		header('Location: ../areaPaciente.php');
	}