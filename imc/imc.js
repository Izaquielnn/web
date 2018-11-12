const imclib = (function () {

	const valor_imc = function (peso, altura) {
    	return peso / altura ** 2;
	}

	const classificacao = function (imc){
		let classificacao;

		if(imc <18.5) classificacao = "Abaixo do peso";
		else if(imc < 25) classificacao = "Peso normal";
		else if(imc < 30) classificacao = "sobrepeso";
		else if(imc < 35) classificacao = "obesidade grau i";
		else if(imc < 40) classificacao = "obesidade grau ii";
		else classificacao = "obesidade grau iii";

		return classificacao;
	}


	return {
		valor_imc: valor_imc,
		classificacao: classificacao 
	}
})();

