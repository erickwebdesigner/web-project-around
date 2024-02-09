const profbtn = document.querySelector('.profilebtn')
const formEdit = document.querySelector('.form')
const formclose = document.querySelector('.form__close')

const nameprofile = document.querySelector('.profilename')
const jobprofile = document.querySelector('.profileprof')
const formname = document.querySelector('.form__name-Input')
const formjob = document.querySelector('.form__job-Input')


function openform(form) {
    form.classList.add(".form")
    form.style.display = 'flex'
    formname.value = nameprofile.innerHTML
    formjob.value = jobprofile.innerHTML
}

function closeform(form) {
    form.classList.remove('.form')
    form.style.display = 'none'

}

profbtn.addEventListener('click', ()=>{

    openform(formEdit)

})

formclose.addEventListener('click', ()=>{
    closeform(formEdit)
})

