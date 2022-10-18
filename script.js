const btn = document.querySelector("#calcular");

function arredondar(imc) {
    return (Math.round(imc * 100) / 100).toFixed(2);
}

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const altura = document.querySelector("#altura");
    const alturaValue = altura.value / 10;

    const peso = document.querySelector("#peso");
    const pesoValue = peso.value;

    const imc = (pesoValue / (alturaValue * alturaValue)) * 100;

    var valor = arredondar(imc);

    document.getElementById("resultado").innerHTML = "O seu IMC é: " + valor;
})
