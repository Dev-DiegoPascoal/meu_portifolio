document.addEventListener("DOMContentLoaded", function () {
    // Esconde todas as abas ao carregar a página
    document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.style.display = "none";
    });
});

function toggleContent(id) {
    const selectedTab = document.getElementById(id);
    const allTabs = document.querySelectorAll(".tab-content");
    const allButtons = document.querySelectorAll(".tab-link");

    // Fecha todas as abas
    allTabs.forEach((tab) => {
        tab.style.display = "none";
    });

    // Se a aba não estiver aberta, abre ela
    if (selectedTab.style.display !== "block") {
        selectedTab.style.display = "block";
    }

    // Atualiza os botões ativos
    allButtons.forEach((button) => {
        if (button.getAttribute("onclick").includes(id)) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
            arrow.style.color = "black";  // Altera a cor da seta para preta
        }
    });
}

// Menu Toggle para submenus (caso tenha menus dropdown)
document.querySelectorAll(".menu .toggle").forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = this.parentElement;

        // Fecha todos os outros submenus antes de abrir o novo
        parent.parentElement.querySelectorAll(":scope > li").forEach((sibling) => {
            if (sibling !== parent) {
                sibling.classList.remove("open");
                sibling.querySelectorAll(".submenu").forEach((submenu) => submenu.parentElement.classList.remove("open"));
            }
        });

        // Alterna o submenu clicado
        parent.classList.toggle("open");
    });
});



