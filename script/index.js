//Todos os itens de abertura e fechamento do  botão de formulário do profile para alteração do nome e da profissão
const profbtn = document.querySelector('.profile__btn')
const formEdit = document.querySelector('.form')
const formclose = document.querySelector('.form__close')

const formElement = document.querySelector('.form')

const nameInput = document.querySelector('.form__name-Input')
const jobInput = document.querySelector('.form__job-Input')
const nameprofile = document.querySelector('.profile__name')
const jobprofile = document.querySelector('.profile__prof')

nameprofile.textContent = 'Jacques Costeau'
jobprofile.textContent = 'Explorador'

function openForm() {
  if (formEdit.classList.contains('form__open')) {
      formEdit.classList.remove('form__open');
  } else {
      formEdit.classList.add('form__open');
  }
}

function closeForm() {
  formEdit.classList.remove('form__open');
}

function handleSubmit(event) {
  event.preventDefault()

  nameprofile.textContent = nameInput.value;
  jobprofile.textContent = jobInput.value;

  closeForm();
}

profbtn.addEventListener('click', openForm);

formclose.addEventListener('click', closeForm);

formElement.addEventListener('submit', handleSubmit);
///////////////////////////////////////////////////////////////////////////////////////
// Referente a abetura e fechamento do fomulário do botão de troca das imagens inserção de novas fotos
// titulo das fotos
const profbtnplaces = document.querySelector('.profile_places-btn')
const placesEdit = document.querySelector('.form__places')
const formplacesclose = document.querySelector('.form__places-close')
const placesElement = document.querySelector('.form__places')
const namelocal = document.querySelector('.form__places-local')
const linklocal = document.querySelector('.form__places-link')
const placesSubmit = document.querySelector('.form__places-submit')

function placesForm() {
  if (placesEdit.classList.contains('form__places-open')) {
    placesEdit.classList.remove('form__places-open');
  } else {
    placesEdit.classList.add('form__places-open');
  }
}

function placesFormclose() {
  placesEdit.classList.remove('form__places-open');
}

function placesHandleSubmit(event) {
  event.preventDefault()

  placesFormclose();
}

profbtnplaces.addEventListener('click', placesForm);

formplacesclose.addEventListener('click', placesFormclose);

placesElement.addEventListener('submit', placesHandleSubmit);

///referente a inserção dos elementos da seção places

document.addEventListener('DOMContentLoaded', function(){
  const formPlaces = document.querySelector('.form__places');
  const placesSection = document.querySelector('.places');
  const initialCards = [
      {
          name: "Vale de Yosemite",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
      },
      {
          name: "Lago Louise",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
      },
      {
          name: "Montanhas Carecas",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
      },
      {
          name: "Latemar",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
      },
      {
          name: "Parque Nacional da Vanoise ",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
      },
      {
          name: "Lago di Braies",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
      }
  ];

  initialCards.forEach(card => addPlace(card.name, card.link));

  function addPlace(name, link) {
      const template = document.querySelector('.places__box');
      const templateClone = template.content.cloneNode(true);
      templateClone.querySelector('.places__title').textContent = name;
      templateClone.querySelector('.places__image').setAttribute('src', link)
      placesSection.appendChild(templateClone);
  }

  formPlaces.addEventListener('submit', function(event){
      event.preventDefault();
      const name = formPlaces.querySelector('.form__places-local').value;
      const link = formPlaces.querySelector('.form__places-link').value;
      initialCards.push({ name, link });
      addPlace(name, link);
      formPlaces.reset();
  });

  // Adiciona um evento remoção a cada botão de exclusão
  const deleteButtons = document.querySelectorAll('.places__delete');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const item = button.closest('.places__itens');
        item.remove();
    });
});

//adiciona o botão de like para cada item
  placesSection.addEventListener('click', function(event) {
    if (event.target.classList.contains('places__button')) {
        event.target.classList.toggle('places__button-liked');
    }
});

//adiciona o botão de click para cada imagem onde o mesmo abre em tela cheia com nome e botão de fechar
  placesSection.addEventListener('click', function(event) {
    if (event.target.classList.contains('places__image')) {
        const imageBox = document.createElement('div');
        imageBox.classList.add('imagebox');

        const imageBoxContent = document.createElement('div');
        imageBoxContent.classList.add('imagebox__content');

        const imageBoxClose = document.createElement('span');
        imageBoxClose.classList.add('imagebox__close');
        imageBoxClose.textContent = '×';

        const imageBoxImage = document.createElement('img');
        imageBoxImage.classList.add('imagebox__image');
        imageBoxImage.setAttribute('src', event.target.src);
        imageBoxImage.setAttribute('alt', event.target.alt);

        const lightboxCaption = document.createElement('div');
        lightboxCaption.classList.add('imagebox__caption');
        lightboxCaption.textContent = event.target.nextElementSibling.textContent;

        imageBoxContent.appendChild(imageBoxClose);
        imageBoxContent.appendChild(imageBoxImage);
        imageBoxContent.appendChild(lightboxCaption);

        imageBox.appendChild(imageBoxContent);

        document.body.appendChild(imageBox);

        imageBoxClose.addEventListener('click', function() {
            imageBox.remove();
        });
    }
});

})
