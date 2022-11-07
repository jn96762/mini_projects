const imageContainer = document.querySelector('.image-container')
const buttons = document.querySelectorAll('.btn')
const imgs = document.querySelectorAll('#imgs img')

const imgSize = 500
let idx = 0

buttons.forEach((button) => {
    button.addEventListener('click', () => moveCarousel(button.id)
)})

function moveCarousel (btnId) {
    if (btnId === 'left') {
        if (idx === 0) {
            idx = imgs.length - 1
        } else {
            idx--
        }
    imageContainer.style.transform = `translateX(-${idx * imgSize}px)`
    }
    if (btnId === 'right') {
        if (idx === 3) {
            idx = 0
        } else {
            idx++
        }
    imageContainer.style.transform = `translateX(-${idx * imgSize}px)`
    }
}