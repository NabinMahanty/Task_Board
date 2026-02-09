function TaskCard({task, deleteTask, moveTask}){

  return(
    <div className="task-card">
      <p>{task.text}</p>

      <button onClick={()=>deleteTask(task.id)}>X</button>

      {task.status !== "todo" &&
        <button onClick={()=>moveTask(task.id,"todo")}>To Do</button>
      }

      {task.status !== "progress" &&
        <button onClick={()=>moveTask(task.id,"progress")}>In Progress</button>
      }

      {task.status !== "done" &&
        <button onClick={()=>moveTask(task.id,"done")}>Done</button>
      }
    </div>
  );
}

export default TaskCard;
