const image = document.querySelector('.img-container')
const times = document.getElementById('times')

let clickTime = 0
let likeCount = 0

// EASY WAY using dblclick
// image.addEventListener('dblclick', (e) => {
//     createHeart(e)
// })

// HARD WAY using click and clilckTime variable set up above
image.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 500) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

function createHeart(e) {
    const x = e.clientX
    const y = e.clientY

    const imageTop = e.target.offsetTop
    const imageLeft = e.target.offsetLeft

    const xInside = x - imageLeft
    const yInside = y - imageTop

    const heart = document.createElement('a')
    heart.classList.add('fa-solid', 'fa-heart')
    
    heart.style.top = yInside + 'px'
    heart.style.left = xInside + 'px'

    image.appendChild(heart)

    updateLikeCount()
    setTimeout(() => heart.remove(), 500)
}

function updateLikeCount() {
    likeCount++
    times.innerText = likeCount
}