
// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
// passo 3 - fazer aparecer o próximo cartão da lista
// passo 4 - buscar o cartão que esta selecionado e esconder


// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
// passo 3 - fazer aparecer o cartão anterior da lista
// passo 4 - buscar o cartão que esta selecionado e esconder

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {

    const ehUltimoCartao = cartaoAtual === cartoes.length -1;
    if (ehUltimoCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
})

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();  
})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSeleecionado = document.querySelector(".selecionado");
    cartaoSeleecionado.classList.remove("selecionado");
}