function abrirAba(event, abaId) {
    // Esconde todo o conteúdo das abas
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove a classe 'active' de todas as abas
    let tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Mostra o conteúdo da aba clicada e adiciona a classe 'active' ao botão
    document.getElementById(abaId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Exibe a primeira aba por padrão
document.getElementsByClassName("tab-content")[0].style.display = "block";
