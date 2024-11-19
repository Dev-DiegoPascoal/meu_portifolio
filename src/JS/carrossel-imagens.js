const carousel = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

// Função para exibir a imagem com base no índice
function showImage(idx) {
  const offset = -idx * 100; // Calcula o deslocamento
  carousel.style.transform = `translateX(${offset}%)`;
}

// Avançar para a próxima imagem
function nextImage() {
  index = (index < images.length - 1) ? index + 1 : 0; // Loop para a primeira imagem
  showImage(index);
}

// Retroceder para a imagem anterior
function prevImage() {
  index = (index > 0) ? index - 1 : images.length - 1; // Loop para a última imagem
  showImage(index);
}

// Evento nos botões
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Troca automática de imagens a cada 3 segundos
let autoSlide = setInterval(nextImage, 3000);

// Pausa o carrossel quando o mouse está sobre ele
document.querySelector('.carousel').addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

// Retoma o carrossel ao remover o mouse
document.querySelector('.carousel').addEventListener('mouseout', () => {
  autoSlide = setInterval(nextImage, 3000);
});
