// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value.trim();

//     if (taskText === '') {
//         alert('Пожалуйста введите задачу');
//         return;
//     }
    
//     const taskList = document.getElementById('taskList');
    
//     const li = document.createElement('li');
//     li.innerHTML = `
//     <span>${taskText}</span>
//     <button class = 'delete-btn' onclick = "deleteTask(this)">Удалить</button>
//     `;

//     li.addEventListener('click', function() {
//         this.classList.toggle('completed');
//     })

//     taskList.appendChild(li);
//     taskInput.value = '';
//     saveTasks();

// }

// function deleteTask(button) {
//     const li = button.parentElement;
//     li.remove();
//     saveTasks();
// }

// function saveTasks() {
//     const tasks = [];
//     document.querySelectorAll('#taskList li').forEach(li =>{
//         tasks.push({
//             text: li.querySelector('span').textContent,
//             completed: li.classList.contains('completed')
//         });
//     });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function loadTasks() {
//     const savedTasks = localStorage.getItem('tasks');
//     if (savedTasks) {
//         const tasks = JSON.parse(savedTasks);
//         const taskList = document.getElementById('taskList');
        
//         tasks.forEach(task => {
//             const li = document.createElement('li');
//             if (task.completed) {
//                 li.classList.add('completed');
//             }
//             li.innerHTML = `
//                 <span>${task.text}</span>
//                 <button class="delete-btn" onclick="deleteTask(this)">Удалить</button>
//             `;
//             li.addEventListener('click', function() {
//                 this.classList.toggle('completed');
//                 saveTasks();
//             });
//             taskList.appendChild(li);
//         });
//     }
// }

// // Загружаем задачи при загрузке страницы
// window.onload = loadTasks;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Пожалуйста, введите задачу');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Удалить</button>
    `;
    
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
    
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        const taskList = document.getElementById('taskList');
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            if (task.completed) {
                li.classList.add('completed');
            }
            li.innerHTML = `
                <span>${task.text}</span>
                <button class="delete-btn" onclick="deleteTask(this)">Удалить</button>
            `;
            li.addEventListener('click', function() {
                this.classList.toggle('completed');
                saveTasks();
            });
            taskList.appendChild(li);
        });
    }
}

// Загружаем задачи при загрузке страницы
window.onload = loadTasks;