const screens = document.querySelectorAll('.screen')
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn')
const startBtn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const gameContainer = document.querySelector('.game-container')

let seconds = 0
let score = 0
let selectedInsect = {}

startBtn.addEventListener('click', () => screens[0].classList.add('up'))

chooseInsectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selectedInsect = {
            src,
            alt
        }

        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insectEl = document.createElement('div')
    insectEl.classList.add('insect')
    const randomX = `${Math.floor(Math.random() * 80 + 5)}%`
    const randomY = `${Math.floor(Math.random() * 80 + 5)}%`
    const randomAngle = `${Math.random() * 360}deg`
    insectEl.style.left = randomX
    insectEl.style.top = randomY
    insectEl.style.rotate = randomAngle
    insectEl.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}">`
    insectEl.addEventListener('click', catchInsect)
    gameContainer.appendChild(insectEl)
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(createInsect, 800)
    setTimeout(createInsect, 1100)
    setTimeout(this.remove(), 2000)
}

function increaseScore() {
    score++
    if (score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}