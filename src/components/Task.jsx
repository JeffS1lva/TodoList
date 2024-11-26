import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox.jsx";

export function Task({content, taskDelete}) {
  function handleDeleteTask() {
    taskDelete(content)
  }
  return (
    <div className={styles.task}>
      <Checkbox 
       label={content}
      />
      
      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
