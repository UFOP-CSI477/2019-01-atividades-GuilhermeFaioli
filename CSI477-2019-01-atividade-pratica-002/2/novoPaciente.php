<!DOCTYPE html>
<html>
	<head>
		<title>Novo Paciente</title>
		<meta charset="utf-8">
	</head>

	<body>
		<form method="POST" action="funcoes/funcCadastro.php">
			<label for="name">Nome:</label>
			<input placeholder='Nome' type='text' name='name' id='name'>
			<label for="email">Email</label>
			<input placeholder='Email' type='email' name='email' id='email'>
			<label for="password">Senha</label>
			<input placeholder='Senha' type='password' name='password' id='password'>
			<div class="form-group espacamento">
				<label for="type">Nível de acesso</label>
				<select id="type" name="type">
					<option value="1">Usuário comum:</option>
					<option value="2">Administrador</option>
				</select>
			</div>
			<label for="remember_token">Remember_token:</label>
			<input placeholder='Remember_token' type='text' name='remember_token' id='remember_token'>
			<input value='Cadastrar' type='submit'><br>
		</form>
		<a href="areaPaciente.php">Voltar</a>
	</body>	
</html>