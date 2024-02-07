const profbtn = document.querySelector('.profilebtn')
const formEdit = document.querySelector('.form')
const formclose = document.querySelector('.formclose')

const nameprofile = document.querySelector(`.profilename`)
const job = document.querySelector(`.profileprof`)
const nameInput = document.querySelector(`.formnameInput`)
const jobInput = document.querySelector(`.formjobInput`)

function openform(form) {
    form.classList.add(".form")
    form.style.display = 'flex'
    
    console.log(form)
    console.log(">>>>>>>>>>>>>sstou aberto")
}

function closeform(form) {
    form.classList.remove('.form')
    form.style.display = 'none'
    console.log('>>>>>>>>>>>>>> estou fechado')
    
}
 
profbtn.addEventListener('click', ()=>{
    nameInput.value = nameprofile.textContent
    jobInput.value = job.textContent
    openform(formEdit)
    
})

formclose.addEventListener('click', ()=>{
    closeform(formEdit)
})
