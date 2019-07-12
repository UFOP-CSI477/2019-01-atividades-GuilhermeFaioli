<!DOCTYPE html>
<html>
	<head>
		<title>Área do Paciente</title>
		<meta charset="utf-8">
	</head>

	<body>
		<form method="POST" action="funcoes/funcLogin.php">
			<label for="email">Email:</label>
			<input type="email" name="email" id="email">
			<label for="password">Senha:</label>
			<input type="password" name="password" id="password">
			<input type="submit" name="login">
		</form>
		<a href="novoPaciente.php">Novo Paciente</a>
		<a href="index.php">Home</a>
	</body>	
</html>