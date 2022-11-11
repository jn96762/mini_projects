const codes = document.querySelectorAll('.code')
const submit = document.querySelector('.submit')
const info = document.querySelector('info')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        console.log(idx)
        if (e.key >= 0 && e.key <=9 && idx < 5) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)            
        } else if (e.key == 'Backspace' && idx > 0) {
            codes[idx - 1].focus()
        } else if (idx >=5) {
            setTimeout(() => submit.focus(), 10)
        }
    })
})