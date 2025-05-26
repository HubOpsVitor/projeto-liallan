/**
 * Projeto LiAllan
 * @author Allan Vítor 
 */

// ==========================
// 🎞️ Banner Carrossel
// ==========================
const main = document.querySelector('main');
const backgrounds = [
  'url(img/liallan1.jpg)',
  'url(img/liallan.jpg)',
  'url(img/liallan3.jpg)'
];

let indice = 0;

function slider() {
  indice = (indice + 1) % backgrounds.length;
  main.style.backgroundImage = backgrounds[indice];
  main.style.transition = 'background-image 1s ease-in-out';
}

// Troca de imagem a cada 3 segundos
setInterval(slider, 3000);

// ==========================
// 📅 Inserção do ano atual
// ==========================
const ano = document.getElementById('copyrightYear');
const anoAtual = new Date().getFullYear();
ano.textContent = anoAtual;
