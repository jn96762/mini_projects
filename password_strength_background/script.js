const password = document.getElementById('password')
const image = document.querySelector('.background')

password.addEventListener('input', (e) => {
    blurValue = 20 - (e.target.value.length * 2);
    image.style.filter = `blur(${blurValue}px)`
})
