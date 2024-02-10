const profbtn = document.querySelector('.profile__btn')
const formEdit = document.querySelector('.form')
const formclose = document.querySelector('.form__close')

const formElement = document.querySelector('.form__submit')


function openform(form) {
    form.classList.add(".form")
    form.style.display = 'flex'
}

function closeform(form) {
    form.classList.remove('.form')
    form.style.display = 'none'

}
function form__submit(evt){
  evt.preventDefault();

  const nameInput = document.querySelector('.form__name-Input')
  const jobInput = document.querySelector('.form__job-Input')
  

}

profbtn.addEventListener('click', ()=>{

    openform(formEdit)

})

formclose.addEventListener('click', ()=>{
    closeform(formEdit)
})

formElement.addEventListener('submit', ()=>{

  form__submit(formEdit)


});
