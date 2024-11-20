const carousel = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');

// Duplicar imagens no início e no final
const imagesHTML = [...images].map(img => img.outerHTML).join('');
carousel.innerHTML = imagesHTML + carousel.innerHTML + imagesHTML;

// Selecionar todas as imagens (incluindo as duplicadas)
const allImages = document.querySelectorAll('.carousel-inner img');
const totalImages = allImages.length;
const visibleImages = images.length;

let index = visibleImages; // Começa na posição inicial (primeiro conjunto real)
carousel.style.transform = `translateX(-${index * 100}%)`;

// Função para exibir a imagem
function showImage(idx) {
  carousel.style.transition = 'transform 0.5s ease-in-out'; // Adiciona a transição
  const offset = -idx * 100; // Calcula o deslocamento
  carousel.style.transform = `translateX(${offset}%)`;
}

// Avançar para a próxima imagem
function nextImage() {
  index++;
  showImage(index);

  // Caso atinja o final duplicado, reposiciona para o início real
  if (index === totalImages - visibleImages) {
    setTimeout(() => {
      carousel.style.transition = 'none'; // Remove a transição
      index = visibleImages; // Reposiciona para o início real
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 500); // Aguarda a transição terminar
  }
}

// Retroceder para a imagem anterior
function prevImage() {
  index--;
  showImage(index);

  // Caso atinja o início duplicado, reposiciona para o final real
  if (index === 0) {
    setTimeout(() => {
      carousel.style.transition = 'none'; // Remove a transição
      index = totalImages - visibleImages * 2; // Reposiciona para o final real
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 500); // Aguarda a transição terminar
  }
}

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
