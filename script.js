// window.addEventListener('load', function() {
//   var musica = document.getElementById('minha-musica');
//   musica.play();
// });
window.addEventListener('load', function() {
  var musica = document.getElementById('minha-musica');
  musica.play();
});

const sectionElement = document.querySelector('section');
const resolutionSelect = document.getElementById('resolution-select');
const worldImage = document.getElementById('world-image');

resolutionSelect.addEventListener('change', () => {
  const selectedResolution = resolutionSelect.value.split('x');
  const width = parseInt(selectedResolution[0]);
  const height = parseInt(selectedResolution[1]);

  worldImage.src = getWorldImageSource(width, height);

  if (width >= 3840 && height >= 2160) {
    sectionElement.style.backgroundImage = 'url("Papel de parede para computador astronauta galáxia ilustrado colorido.jpg")';
  } else if (width >= 2560 && height >= 1440) {
    sectionElement.style.backgroundImage = 'none';
  } else if (width >= 1920 && height >= 1080) {
    sectionElement.style.backgroundImage = 'none';
  } else if (width >= 1280 && height >= 720) {
    sectionElement.style.backgroundImage = 'none';
  } else if (width == 0) {
    sectionElement.style.backgroundImage = 'none';
  } else {
    sectionElement.style.backgroundImage = 'none';
  }
});

function getWorldImageSource(width, height) {
  if (width >= 3840 && height >= 2160) {
    return 'img-luiza.jpg';
  } else if (width >= 2560 && height >= 1440) {
    return 'https://img.freepik.com/fotos-gratis/renderizacao-3d-do-planeta-terra_23-2150498436.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714089600&semt=aisimages/mundo-2k.jpg';
  } else if (width >= 1920 && height >= 1080) {
    return 'https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low';
  } else if (width >= 1280 && height >= 720) {
    return 'https://img.freepik.com/vetores-premium/pixel-art-planeta-terra_38133-5.jpg';
  } else if (width == 0) {
    return '';
  } else {
    return 'https://img.freepik.com/vecteurs-premium/icone-planete-terre-pixel-art_1102-3931.jpg';
  }
}
