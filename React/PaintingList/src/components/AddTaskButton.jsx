import { useState } from "react";
import InputText from "./InputText";

export default function AddTaskButton({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <InputText
        msn={"Set Task"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}
