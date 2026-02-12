import TaskCard from "./TaskCard";
import { useState } from "react";

function Column({title, status, tasks, addTask, deleteTask, moveTask}){

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

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
          <select value={priority} onChange={(e)=>setPriority(e.target.value)} className="priority-select">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={()=>{
            if(text.trim()) {
              addTask(text, priority);
              setText("");
              setPriority("Medium");
            }
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
            updateTask={updateTask}
          />
        ))
      }
    </div>
  );
}

export default Column;
