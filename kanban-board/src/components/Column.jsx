import TaskCard from "./TaskCard";
import { useState } from "react";

function Column({title, status, tasks, addTask, deleteTask, moveTask}){

  const [text, setText] = useState("");

  return(
    <div style={{border:"1px solid black", padding:"10px", width:"250px"}}>
      <h3>{title}</h3>

      {status === "todo" && (
        <>
          <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Enter task"
          />
          <button onClick={()=>{
            addTask(text);
            setText("");
          }}>Add</button>
        </>
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
