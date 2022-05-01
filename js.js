const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')
let counter = 1
// prevBtn.disabled = false


nextBtn.addEventListener('click', () => {
    changeStatusNext()
    console.log(counter)
})

prevBtn.addEventListener('click', () => {
    changeStatusPrev()
    console.log(counter)
})

function changeStatusNext() {
    counter++
    if(counter == 1){
        circles[0].classList.add('active')
    }
    if(counter == 2) {
        progress.style.width = '133px'
        circles[1].classList.add('active')
        prevBtn.disabled = false
    }
    if(counter == 3) {
        progress.style.width = '233px'
        circles[2].classList.add('active')
    }
    if(counter == 4) {
        progress.style.width = '333px'
        circles[3].classList.add('active')
        nextBtn.disabled = true
    }
    
}
function changeStatusPrev(){
    counter--
    if(counter < 1 ) counter = 1
    if(counter == 1){
        nextBtn.disabled = false
        prevBtn.disabled = true
        progress.style.width = '0px'
        circles[1].classList.remove('active')
    }
    if(counter == 2) {
        nextBtn.disabled = false
        progress.style.width = '133px'
        circles[2].classList.remove('active')
    }
    if(counter == 3) {
        nextBtn.disabled = false
        progress.style.width = '233px'
        circles[3].classList.remove('active')
    }
    if(counter == 4) {
        progress.style.width = '333px'
        circles[3].classList.remove('active')
        nextBtn.disabled = true
    }
}