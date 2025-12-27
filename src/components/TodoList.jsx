import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.length === 0 && (
        <p className="text-center text-gray-500">
          No todos yet — add one!
        </p>
      )}

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
