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