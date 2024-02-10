const profbtn = document.querySelector('.profile__btn')
const formEdit = document.querySelector('.form')
const formclose = document.querySelector('.form__close')

const formElement = document.querySelector('.form')

function openform(form) {
  form.classList.add(".form")
  form.style.display = 'flex'
}

function handleProfileFormSubmit(evt) {

    evt.preventDefault();

    const nameInput = document.querySelector('.form__name-Input')
    const jobInput = document.querySelector('.form__job-Input')

    const nameprofile = document.querySelector('.profile__name')
    const jobprofile = document.querySelector('.profile__prof')

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


formElement.addEventListener('submit', handleProfileFormSubmit)