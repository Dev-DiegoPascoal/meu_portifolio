
//Ajusta a seta do menu colapse, quando fechado fica em uma posição e quamdo aberto muda 90 graus
document.querySelectorAll(".toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
        event.preventDefault();

        let submenu = this.nextElementSibling;
        let arrow = this.querySelector(".arrow");

        // Alterna a visibilidade do submenu
        submenu.classList.toggle("active");

        // Alterna a classe 'open' para o item do menu
        this.classList.toggle("open");

        // Altera o ícone da seta (▶ para ▼)
if (submenu.classList.contains("active")) {
    arrow.innerHTML = "▼"; 
    arrow.style.color = "blue"; // Setar a seta para baixo
} else {
    arrow.innerHTML = "▶";  // Setar a seta para a direita
    arrow.style.color = "black";  // Altera a cor da seta para preta
}

        // Fecha outros submenus e restaura as setas para a posição original
        const parent = this.parentElement;
        parent.parentElement.querySelectorAll(":scope > li").forEach((sibling) => {
            if (sibling !== parent) {
                sibling.classList.remove("open");
                const nestedSubmenus = sibling.querySelectorAll(".submenu");
                nestedSubmenus.forEach((submenu) => {
                    submenu.classList.remove("active");
                    // Restaurando a seta para todos os submenus fechados
                    const arrow = sibling.querySelector(".arrow");
                    if (arrow) {
                        arrow.innerHTML = "▶"; // Restaura a seta para a posição inicial
                        arrow.style.color = "black";  // Altera a cor da seta para preta
                    }
                });
            }
        });
    });
});

