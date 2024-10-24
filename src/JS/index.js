
/*
Objetivo 1: Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondido no HTML;

    Passo 1: Pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele.

    Passo 2: Identificar o clique no botão

    Passo 3: Adicionar a classe "ativo" nos projetos escondido.

Objetivo 2: Esconder o botão de mostrar mais

    Passo 1: Pegar o botão o botão e esconder ele;
     
-------------------------------------------------------
*/

//Passo 1: Pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele.

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3: Adicionar a classe "ativo" nos projetos escondido.
    mostrarMaisProjetos();
    //Objetivo 2: Esconder o botão de mostrar mais
    //Passo 1: Pegar o botão o botão e esconder ele;
    esconderBotao();
})

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

const botaoSubir = document.querySelector('.btn-subir');
// Armazena a última posição do scroll
let ultimoScroll = 0; 

// Adiciona um event listener para o evento de scroll
window.addEventListener('scroll', () => {
    // Posição atual do scroll
    const scrollAtual = window.scrollY; 

    if (scrollAtual > ultimoScroll) {
        //Rola para cima
        botaoSubir.classList.remove('remover'); 
    } else {
        // Rola para baixo
        botaoSubir.classList.add('remover'); 
    }
    // Atualiza a última posição do scroll
    ultimoScroll = scrollAtual; 
});

// Adiciona um evento de clique para rolar suavemente para o topo
botaoSubir.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


