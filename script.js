//========== Criar Script para calcular juros de impostos de importação ==========//
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    function calcularImposto() {
        // Preço do produto
        const preco_produto = parseFloat(document.getElementsByName('valor_produto')[0].value);
    
        // Valor do Imposto
        const imposto = parseFloat(document.getElementsByName('taxa')[0].value);

        // Calcular imposto
        const calculo = (imposto / 100) * preco_produto + preco_produto;

        // Retornar resultado para o html
        const resultado = document.getElementsByClassName('resultado')[0];

        const span = document.createElement('span');

        span.innerHTML = `Resultado: ${calculo}`;

        resultado.appendChild(span);
    }

    calcularImposto();
});