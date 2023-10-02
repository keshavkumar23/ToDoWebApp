const input = document.querySelector('input');
const addTask = document.querySelector('.Input > button');

addTask.addEventListener('click', AddTask);

function AddTask(e){

    const incompletedTask = document.querySelector('.IncompletedTask');
    const completedTask = document.querySelector('.CompletedTask');

    const newTask = document.createElement('li');
    const markTask = document.createElement('button');
    markTask.classList.add('marktask');
    const deleteTask = document.createElement('button');
    deleteTask.classList.add('deletetask');

    markTask.innerHTML = 'Mark';
    deleteTask.innerHTML = 'Del';

    if(input.value != ''){
        newTask.textContent = input.value;
        input.value = '';
        incompletedTask.appendChild(newTask);
        newTask.appendChild(markTask);
        newTask.appendChild(deleteTask);
    }

    markTask.addEventListener('click', function(){
        const current = this.parentNode;
        current.remove();
        completedTask.appendChild(current);
        markTask.style.display = 'none';
    });

    deleteTask.addEventListener('click', function(){
        const current = this.parentNode;
        current.remove();
    });
}