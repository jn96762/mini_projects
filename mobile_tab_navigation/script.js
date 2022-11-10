const contents = document.querySelectorAll('.content')
const tabs = document.querySelectorAll('nav ul li')

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        hideAll()
        contents[idx].classList.add('show')
        tab.classList.add('active')

    })
})

function hideAll() {
    contents.forEach(content => content.classList.remove('show'))  
    tabs.forEach(tab => tab.classList.remove('active'))  
}
