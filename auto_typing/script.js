const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const form = document.getElementById('form')
const customText = document.getElementById('custom-text')

let text = ''
let idx = 1
let speed = 300 / speedEl.value

form.addEventListener('submit', (e) => {
    e.preventDefault()
    text = customText.value

    if (text) {
        writeText()
    }
})

function writeText() {
    console.log(typeof (text), text, text.length)
    textEl.innerText = text.slice(0, idx)

    idx++
    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)