const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')
const modalScroll = document.querySelector('.modal')
const body = document.body;

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
    modalScroll.classList.toggle('scroll')
    document.body.classList.toggle('no-scroll')
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if (e.target == modal) {
        closeModal()
    }
}