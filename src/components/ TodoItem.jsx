import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { updateTodo, deleteTodo } = useTodos();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    updateTodo(todo.id, text);
    setEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2">
      {editing ? (
        <input
          className="border px-2 py-1 w-full mr-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="flex gap-2">
        {editing ? (
          <button
            onClick={saveEdit}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
