document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value;

        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';

            removeButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(removeButton);

            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});
