//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOptions= document.querySelector('.filter-todos')

//EventListners
todoButton.addEventListener('click', addtodo)
todoList.addEventListener('click', deleteCheck)
filterOptions.addEventListener('click', filterTodo)

//Funtions
function addtodo(e) {
    //Preventinf form from subbmiting
    e.preventDefault();
    //TodoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create new Li
    const newLi= document.createElement('li');
    newLi.innerText= todoInput.value;
    newLi.classList.add('todo-item');
    
    todoDiv.appendChild(newLi);
//Create completedButton
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
    completedButton.classList.add('completed-btn');
    completedButton.classList.add('completed-test');
    todoDiv.appendChild(completedButton);
//Create TrashButton
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Appending the created div and li to the Ul
    todoList.insertAdjacentElement('afterbegin',todoDiv);
    //Clearing the input text after submitting
    todoInput.value= '';
}


function deleteCheck(e){
    const item = e.target;
    //delete todos
    if(item.classList[0] === 'trash-btn'){
        const done = item.parentElement;
        //Animations
        done.classList.add('slide')
        done.addEventListener('transitionend', ()=> done.remove()) 
    }

    //checked
    if(item.classList[0] === 'completed-btn'){
        const checked = item.parentElement;
        checked.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch(e.target.value) {
            case 'all':
         todo.style.display = 'flex';   
         break;
         case 'completed':
         if(todo.classList.contains('completed')){
            todo.style.display = 'flex';
        }else{
            todo.style.display= 'none';
        }
        break;
            case 'uncompleted':
            if(!todo.classList.contains('completed')){
               todo.style.display = 'flex';
           }else{
               todo.style.display= 'none';
           }
           break;
    }
    });
}