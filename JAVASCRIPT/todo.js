const todoList = [];


renderTodoList();

function renderTodoList(){
    let todoListHtml = '';
    for(let i = 0; i < todoList.length; i++){
        const des = `<div>
            <div>${todoList[i].name}</div>
            <div>${todoList[i].date}</div>
            <button>Delete</button>
            </div>`;
        todoListHtml += des;
    }

    document.querySelector('.display_todo').innerHTML = todoListHtml;
}

function addTodo(){
    let todoName = document.querySelector('.name_todo');
    let todoDate = document.querySelector('.date_todo');

    todoList.push({name: todoName.value,
                    date: todoDate.value});

    if(todoName.value === '' || todoDate.value === ''){
        alert("Please enter all fields");
    }
    else{
        todoName.value = '';
        todoDate.value = '';
        renderTodoList();
    }
}