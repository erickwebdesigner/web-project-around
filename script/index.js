const profbtn = document.querySelector('.profile__btn')
const formEdit = document.querySelector('.form')
const formclose = document.querySelector('.form__close')

// Vamos encontrar o formulário no DOM
const formElement = document.querySelector('.form')

function openform(form) {
  form.classList.add(".form")
  form.style.display = 'flex'
}
// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
    // Esta linha impede o navegador
    // de enviar o formulário da forma padrão.
    evt.preventDefault();
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Vamos encontrar os campos de formulário do DOM
    const nameInput = document.querySelector('.form__name-Input')
    const jobInput = document.querySelector('.form__job-Input')

    // Pegue os valores de cada campo do valor da propriedade correspondente
    // Selecione os elementos aos quais os valores dos campos serão inseridos
    const nameprofile = document.querySelector('.profile__name')
    const jobprofile = document.querySelector('.profile__prof')
    // Insira novos valores usando a
    // propriedade textContent
    nameprofile.textContent = nameInput.value
    jobprofile.textContent = jobInput.value
}

function closeform (form){
  form.classList.remove('.form')
  form.style.display = 'none'

}
profbtn.addEventListener('click', ()=>{

  openform(formEdit)

})

formclose.addEventListener('click', ()=>{
  closeform(formEdit)
})

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit)