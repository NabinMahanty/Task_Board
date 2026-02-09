import TaskCard from "./TaskCard";
import { useState } from "react";

function Column({title, status, tasks, addTask, deleteTask, moveTask}){

  const [text, setText] = useState("");

  return(
    <div className="column">
      <h3>{title}</h3>

      {status === "todo" && (
        <div className="column-input">
          <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Enter task"
          />
          <button onClick={()=>{
            addTask(text);
            setText("");
          }}>Add</button>
        </div>
      )}

      {tasks
        .filter(t => t.status === status)
        .map(t => (
          <TaskCard
            key={t.id}
            task={t}
            deleteTask={deleteTask}
            moveTask={moveTask}
          />
        ))
      }
    </div>
  );
}

export default Column;
