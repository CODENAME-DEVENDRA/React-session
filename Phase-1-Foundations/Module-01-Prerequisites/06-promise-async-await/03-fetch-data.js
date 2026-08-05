async function getTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;
}
// console.log("getTodo", getTodo(4));

async function loadTodo(id) {
  try {
    const todo = await getTodo(id);
    console.log("todo", todo);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("done");
  }
}
loadTodo(4);
