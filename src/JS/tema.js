const checkbox = document.querySelector('.theme-switch input');
const body = document.body;

// 🔄 Aplica o tema salvo no localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  checkbox.checked = true;
} else {
  body.classList.remove('dark-mode');
  checkbox.checked = false;
}

// 🎚️ Alterna o tema ao clicar no switch
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

  