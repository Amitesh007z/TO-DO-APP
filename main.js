document.getElementById('add').addEventListener('click', function() {
    const todo = document.getElementById('todo');
    const list = document.getElementById('list');

    if (todo.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = todo.value;
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
        list.appendChild(li);
        todo.value = "";
    }
});
