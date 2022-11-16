const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    // * 0.92 is to compensate for the slight discrepancy
    const x = (value - 50) * 3 * 0.92

    label.style.transform = `translateX(${x}px)`

    label.innerHTML = value
})