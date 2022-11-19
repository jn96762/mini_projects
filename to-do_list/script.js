const form = document.getElementById('form')
const todosUl = document.querySelector('.todos')
const input = document.querySelector('.input')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.done) {
            todoEl.classList.add('done')
        }
        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('done')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todosUl.appendChild(todoEl)
        input.value = ''

        updateLS()
    }
}

function updateLS() {
    const todoEls = document.querySelectorAll('li')
    const todos = []

    todoEls.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            done: todoEl.classList.contains('done')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}


// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(localStorage.getitem(obj))

                       