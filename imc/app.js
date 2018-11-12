const widget_altura = document.getElementsByTagName("input")[0];
const widget_peso = document.getElementsByTagName("input")[1];
const widget_imc = document.getElementById("imc");
const widget_classificacao = document.getElementById("classificacao");

widget_altura.onkeyup = calcule_imc;
widget_peso.onkeyup = calcule_imc;

function calcule_imc() {
    const peso = Number(widget_peso.value);
    const altura = Number(widget_altura.value);
    
    const imc = imclib.valor_imc(peso, altura).toFixed(1);
    const classificacao = imclib.classificacao(imc);

    if (imc > 0) {
    	widget_imc.innerText = imc;
    	widget_classificacao.innerText = classificacao;
    } else {
    	widget_imc.innerText = "imc";
    	widget_classificacao.innerText = "classificacao";
    }
}


