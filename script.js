const btn = document.querySelector("#calcular");

function arredondar(imc) {
    return (Math.round(imc * 100) / 100).toFixed(2);
}

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const altura = document.querySelector("#altura");
    const alturaValue = altura.value/100;
    if (alturaValue<1){
        alturaValue = alturaValue*100;
    }

    const peso = document.querySelector("#peso");
    const pesoValue = peso.value;

    const imc = (pesoValue / (alturaValue * alturaValue));

    var valor = arredondar(imc);
    
    if (imc<18.5){
        document.getElementById("resultado").innerHTML = "O seu IMC é: " + valor +"<br>Você está abaixo do peso recomendado";
    }else if (imc>25){
        document.getElementById("resultado").innerHTML = "O seu IMC é: " + valor +"<br>Você está acima do peso";
    }else{
        document.getElementById("resultado").innerHTML = "O seu IMC é: " + valor +"<br>Você está bacana 👍";
    }
    
})
