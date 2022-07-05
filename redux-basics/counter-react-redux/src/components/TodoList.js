import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTION_TYPES from "../redux/actionTypes";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.ADD_TODO, payload: newTodo });
            setNewTodo("");
          }}
        >
          Add
        </button>
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
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.label}</td>
              <td>{todo.done ? "Y" : "X"}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch({
                      type: ACTION_TYPES.DELETE_TODO,
                      payload: todo.id,
                    })
                  }
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
