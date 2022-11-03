const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => adjust(e.target)))

function adjust(thirdCheck) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === thirdCheck) {
            cheap.checked =false
        }
        if (cheap === thirdCheck) {
            fast.checked =false
        }
        if (fast === thirdCheck) {
            good.checked =false
        }
    }
}