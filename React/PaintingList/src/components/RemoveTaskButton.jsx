export default function RemoveTaskButton({ onDelete, todo }) {
  return <button onClick={() => onDelete(todo.id)}>Delete</button>;
}
