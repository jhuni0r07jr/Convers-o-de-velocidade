function Converter() {
    const Resultado = document.getElementById("Resultado");
    const Distancia = parseFloat(document.getElementById("inputDistancia").value);
    const Conversao = document.getElementById("Conversão").value;
    

    if (Distancia !== '') {
        let Calculo = 0;

        switch (Conversao) {
            case "ML":
                Calculo = Distancia * 0.621371;
                break;
            case "CM":
                Calculo = (Distancia * 1.000) / 3.6;
                break;
            case "PP":
                Calculo = (Distancia* 1.000) / 1.097;
                break;
            default:
                alert("Escolha uma opção");
                return;
        }

        Resultado.value = Calculo.toFixed(2);

        // Salva no localStorage
        const Enviar = JSON.parse(localStorage.getItem("jsonData")) || [];
        Enviar.push(Calculo);
        localStorage.setItem("jsonData", JSON.stringify(Enviar));
    } else {
        alert("Erro: o campo de milhas está vazio ou inválido.");
    }
}
function Inverter() {
    const select = document.getElementById("Conversão");
    const totalOpcoes = select.options.length;
    const indiceAtual = select.selectedIndex;

    // Calcula o próximo índice (circular)
    const proximoIndice = (indiceAtual + 1) % totalOpcoes;

    // Define o próximo valor
    select.selectedIndex = proximoIndice;
}