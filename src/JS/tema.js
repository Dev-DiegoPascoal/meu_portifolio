 const checkbox = document.getElementById('toggle-theme');
  const body = document.body;

  // 🔄 Verifica o tema salvo
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    checkbox.checked = true;
  }

  // 🎚️ Alterna o tema
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });