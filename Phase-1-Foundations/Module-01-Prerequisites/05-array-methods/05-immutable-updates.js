const todos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Build a project", completed: false },
];

//CRUD -> Create, Read, Update, Delete

// Create a new todo
function addTodo(todos, newTodo) {
  return [...todos, newTodo];
}
const newTodo = { id: 4, task: "Learn Node.js", completed: false };
console.log("Updated Todos after adding:", addTodo(todos, newTodo));

// Update a todo
function updateTodo(todos, updatedTodo) {
  return todos.map((todo) =>
    todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo,
  );
}
console.log(
  "Updated Todos after updating:",
  updateTodo(todos, { id: 2, task: "Learn React.js", completed: true }),
);

// Delete a todo
function deleteTodo(todos, todoId) {
  return todos.filter((todo) => todo.id !== todoId);
}
console.log("Updated Todos after deleting:", deleteTodo(todos, 1));

//Find a todo
function findTodo(todos, todoId) {
  return todos.find((todo) => todo.id === todoId);
}
console.log("Found Todo:", findTodo(todos, 2));
