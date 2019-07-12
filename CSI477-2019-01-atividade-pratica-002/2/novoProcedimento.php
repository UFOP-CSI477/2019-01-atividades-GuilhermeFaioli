<!DOCTYPE html>
<html>
	<head>
		<title>Solicitação de Exame</title>
		<meta charset="utf-8">
	</head>

	<body>
		<form method="POST" action="funcoes/funcCadProcedimento.php">
			<label for="name">Nome do exame:</label>
			<input placeholder='Nome' type='text' name='name' id='name'>
			<label for="price">Preço</label>
			<input placeholder='Preço' type='number' name='price' id='price'>
			<input value='Cadastrar' type='submit'><br>
		</form>
		<a href="areaPacienteLogado.php">Voltar</a>
	</body>	
</html>