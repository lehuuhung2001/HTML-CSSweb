var index = 0;

function addTodo() {
  console.log('btn clicked');

  let todoVal = document.getElementById('todoInput').value;

  // Create new element
  let todoElement = createTodoElement(todoVal);
  let todoList = document.getElementById('idList');

  // appent todoElement into todoList
  todoList.append(todoElement);
  // append syntax
  // parrent.append(child);
}

function createTodoElement(value) {
  let result;
  index += 1;

  let div = document.createElement('div');
  div.classList.add('d-flex', 'mb-3');
  div.id = 'todo-' + index; // todo-1, todo-2, todo-3

  let btnDelete = document.createElement('button');
  btnDelete.classList.add('btn', 'btn-danger');
  btnDelete.type = 'button';
  btnDelete.onclick = deleteTodoElement(div.id);

  let btnIcon = document.createElement('i');
  btnIcon.classList.add('bi', 'bi-trash');
  // append btnIcon into btnDelete
  btnDelete.append(btnIcon);

  let todoText = document.createElement('p');
  todoText.innerHTML = value;
  todoText.classList.add('flex-grow-1');

  div.append(todoText);
  div.append(btnDelete);

  result = div;
  return result;
}

// function <function name> () { } => basic syntax
// function() { } => noname function / anonymous function
// () => { } => arow function
function deleteTodoElement(id) {
  return function() {
    let divElement = document.getElementById(id);
    divElement.remove();
  }
}
