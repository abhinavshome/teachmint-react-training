import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      label: "Bring Milk",
      done: false,
    },
    {
      id: uuidv4(),
      label: "Clean House",
      done: true,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const toggle = (id) => {
    // const newTodos = [...todos];
    // const t = newTodos.find((todo) => todo.id === id);
    // t.done = !t.done;
    // setTodos(newTodos);

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    setTodos(
      todos.concat({
        id: uuidv4(),
        label: newTodo,
        done: false,
      })
    );
    setNewTodo("");
  };

  if (todos.length === 0) {
    return <div>No todos</div>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>+</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className={todo.done ? "done" : "not-done"}>
              <td>{todo.id}</td>
              <td>{todo.label}</td>
              <td>{todo.done ? "DONE" : "NOT DONE"}</td>
              <td>
                <button onClick={() => toggle(todo.id)}>&part;</button>
                <button onClick={() => remove(todo.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
