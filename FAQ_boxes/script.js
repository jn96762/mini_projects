const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    const box = button.parentNode;
    button.addEventListener('click', () => {
        box.classList.toggle('active');
    })
})

