document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //adding task to our list
    function addTask(save = true){
        var taskText = taskInput.value.trim();
        if(taskText == ""){
            alert('Please enter a task!');
        }else{
            var li = document.createElement('li');
            li.textContent = taskText;

            var btn = document.createElement('button');
            btn.textContent = 'Remove';
            btn.classList.add('remove-btn');
            btn.addEventListener('click',function(){
                li.remove();
            })

            li.appendChild(btn);
            taskList.appendChild(li);

             if (save) {
                    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                    storedTasks.push(taskText);
                    localStorage.setItem('tasks', JSON.stringify(storedTasks));
                }
            taskInput.value = '';
        }
    }

    //clicking the add button
    addButton.addEventListener('click', addTask);

    //hitting enter to add task
    taskInput.addEventListener('keypress', function(event){
        if(event.key == "Enter"){
            addTask();
        }
    });

    document.addEventListener('DOMContentLoaded', addTask);

    function loadTasks(){
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
       tasks.foreach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
       })
    }


document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});
});