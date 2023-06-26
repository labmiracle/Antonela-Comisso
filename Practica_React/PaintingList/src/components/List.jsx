import { ListItem } from "./ListItem";

export default function List({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <ListItem
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}
