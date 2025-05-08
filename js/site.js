document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('meuBotao');
    const mensagemElemento = document.getElementById('mensagem');

    if (botao && mensagemElemento) {
        botao.addEventListener('click', function() {
            mensagemElemento.textContent = "O botão foi clicado e o texto mudou!";
        });
    }
});