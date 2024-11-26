import styles from "./Post.module.css";
import { PlusCircle } from "phosphor-react";
import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import { useState } from "react";

export function Post() {
  const [task, setPostTask] = useState([]);
  const [taskCount, setTaskCount] = useState(0);
  const [newTask, setNewTask] = useState("");

  function handleTask(event) {
    event.preventDefault();
    setPostTask([...task, newTask]);
    setNewTask("");
    setTaskCount(taskCount + 1);
  }

  function handleOnChange(event) {
    setNewTask(event.target.value);
  }

  function taskDelete(onDeleteTask) {
    const deleteTask = task.filter((tasks) => {
      return tasks !== onDeleteTask;
    });

    setPostTask(deleteTask);
    setTaskCount(taskCount - 1);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleTask} className={styles.form} action="">
        <input
          type="text"
          required
          value={newTask}
          onChange={handleOnChange}
          placeholder="Adicione uma nova tarefa"
        />
        <div>
          <button type="submit">
            Criar <PlusCircle size={26} />
          </button>
        </div>
      </form>
      <div className={styles.taskContainer}>
        <p>
          Tarefas criadas <b>{taskCount}</b>{" "}
        </p>
        <span>
          Concluidas <b>0 de {taskCount} </b>{" "}
        </span>
      </div>

      <div>
        <div>
          {task.length > 0 ? (
            task.map((task) => {
              return (
                <Task
                  content={task}
                  taskDelete={taskDelete}
                />
              );
            })
          ) : (
            <div className={styles.emptyArea}>
              <div className={styles.voidTask}>
                <ClipboardText size={75} color="#808080" weight="thin" />
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
