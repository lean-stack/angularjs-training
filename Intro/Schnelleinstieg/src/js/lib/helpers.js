
function getAllTodos() {
  return JSON.parse(localStorage.getItem('todos') || '[]');
}

function getAllTodosOrMockdata() {
  const todosMock = [
    { id: -1, title: 'Setup an AngularJS Project', completed: true },
    { id: -2, title: 'Learn Template Syntax', completed: false },
    { id: -3, title: 'Dependency Injection', completed: false }
  ];
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify(todosMock));
  }
  return getAllTodos();
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(title) {
  const nextId = JSON.parse(localStorage.getItem('lastId') || '0') + 1;
  const todos = getAllTodos();
  const todo = { id: nextId, title, completed: false };
  todos.push(todo);
  saveTodos(todos);
  localStorage.lastId = nextId;
  return todo;
}

function toggleTodoCompletedState(id) {
  const todos = getAllTodos();
  const todo = todos.find(t => t.id === id);
  todo.completed = !todo.completed;
  saveTodos(todos);
  return todo;
}

function updateTodoTitle(id, title) {
  const todos = getAllTodos();
  const todo = todos.find(t => t.id === id);
  todo.title = title;
  saveTodos(todos);
  return todo;
}

function deleteTodo(id) {
  const todos = getAllTodos().filter(t => t.id !== id);
  saveTodos(todos);
}
