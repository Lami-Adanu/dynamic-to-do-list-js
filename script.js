document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //adding task to our list
    function addTask(){
        var taskText = taskInput.value.trim();
        if(taskText == ""){
            alert('Please enter a task!');
        }else{
            var li = document.createElement('li');
            li.textContent = taskText;

            var btn = document.createElement('button');
            btn.textContent = 'remove';
            btn.classList.add('remove-btn');
            btn.addEventListener('click',function(){
                li.remove();
            })

            li.appendChild(btn);
            taskList.appendChild(li);
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
});