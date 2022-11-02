const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('uppercase')
const lowerEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const clipboardEl = document.getElementById('clipboard')
const generateEl = document.getElementById('generate')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

clipboardEl.addEventListener('click', async () => {
    await navigator.clipboard.writeText(result.innerText)

    alert('Copied')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasUpper = upperEl.checked
    const hasLower = lowerEl.checked    
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked

    resultEl.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol)
})

function generatePassword(length, upper, lower, number, symbol) {
    let generatedPassword = ''
    const typesCount = upper + lower + number + symbol
    const typesArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])    
    
    if (typesCount === 0) {
        return ''
    }

    for (let i=0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = shuffle(generatedPassword.slice(0, length))

    return finalPassword
}

function shuffle(pw) {
    const a = pw.split("")
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a.join("")
}


symbols = []

for (let [from, to] of [[33, 48], [58, 65], [91, 97], [123, 127]])
    for (let i = from; i < to; i++) {
        symbols.push(String.fromCharCode(i))
    }


function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26)) + 65)
}

function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26)) + 97)
}

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10)) + 48)
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)] 
}





