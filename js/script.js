// Ativar Links do Menu
const headerLinks = document.querySelectorAll(".header-menu-item a");

function linkActived(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

headerLinks.forEach(linkActived);

// Ativar Itens do Orçamento

const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProduct);

// Seta Perguntas Frequentes

const questions = document.querySelectorAll(".faq-info button");

function questionActive(question) {
  question.addEventListener("click", arrowActive);
  function arrowActive(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls");
    const answer = document.getElementById(controls);

    answer.classList.toggle("active");
    const active = answer.classList.contains("active");
    question.setAttribute("aria-expanded", active);
  }
}

questions.forEach(questionActive);

// Galeria

const images = document.querySelectorAll(".bike-img-col img");
const imgContainer = document.querySelector(".bike-img-col");

function currentImg(img) {
  img.addEventListener("click", changeImg);

  function changeImg(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 500px)").matches;
    if (media) {
      imgContainer.prepend(img);
    }
  }
}

images.forEach(currentImg);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
