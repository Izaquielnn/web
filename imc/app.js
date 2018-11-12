const widget_altura = document.getElementsByTagName("input")[0];
const widget_peso = document.getElementsByTagName("input")[1];
const widget_imc = document.getElementById("imc");
const widget_classificacao = document.getElementById("classificacao");

widget_altura.onkeyup = calcule_imc;
widget_peso.onkeyup = calcule_imc;

function calcule_imc() {
    const peso = Number(widget_peso.value);
    const altura = Number(widget_altura.value);
    const imc = valor_imc(peso, altura).toFixed(1);
    console.log(imc);
    if (imc > 0) {
    	widget_imc.innerText = imc;
    	widget_classificacao.innerText = classificacao(imc);
    } else {
    	widget_imc.innerText = "imc";
    	widget_classificacao.innerText = "classificacao";
    }
}

function classificacao(imc){
	let classificacao;

	if(imc <18.5) classificacao = "Abaixo do peso";
	else if(imc < 25) classificacao = "Peso normal";
	else if(imc < 30) classificacao = "sobrepeso";
	else if(imc < 35) classificacao = "obesidade grau i";
	else if(imc < 40) classificacao = "obesidade grau ii";
	else classificacao = "obesidade grau iii";

	return classificacao;
}
function valor_imc(peso, altura) {
    return peso / altura ** 2;
}


