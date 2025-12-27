import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6"
    >
      <input
        type="text"
        className="w-full border px-3 py-2 rounded"
        placeholder="Add new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
  className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
>
  Add
</button>

    </form>
  );
}
