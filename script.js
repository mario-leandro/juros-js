const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    function pegarValores() {
        const valorProduto = parseFloat(document.getElementById("valor_produto").value);
        const PorcenTaxa = parseFloat(document.getElementById("valor_taxa").innerText);
        const valorLimite = 50;

        const icms = 17 / 100;
        const taxaAbaixoCinquenta = 20 / 100;
        const taxaAcimaCinquenta = 60 / 100;
        const valorFrete = 15;

        return { valorProduto, valorLimite, PorcenTaxa, icms, taxaAbaixoCinquenta, taxaAcimaCinquenta, valorFrete };
    }

    function calcularImposto() {
        const { valorProduto, valorLimite, icms, taxaAbaixoCinquenta, taxaAcimaCinquenta, valorFrete } = pegarValores();

        if (valorProduto < valorLimite) {
            const valorAbaixoCinquentaDoll = valorProduto + (valorProduto * icms) + valorFrete + (valorProduto * taxaAbaixoCinquenta);
            return valorAbaixoCinquentaDoll;
        } else if (valorProduto >= valorLimite) {
            const valorAcimaCinquentaDoll = valorProduto + (valorProduto * icms) + valorFrete + (valorProduto * taxaAcimaCinquenta);
            return valorAcimaCinquentaDoll;
        } else {
            return "Valor inválido";
        }
    }

    function mostrarResultado() {
        const resultado = document.getElementById("resultado");
        const valorFinal = calcularImposto();

        if (isNaN(valorFinal)) {
            resultado.innerHTML = "Valor inválido. Por favor, insira um número válido.";
        } else {
            resultado.innerHTML = `O valor do imposto de importação é de: R$${valorFinal.toFixed(2)}`;
        }
    }

    mostrarResultado();
});
