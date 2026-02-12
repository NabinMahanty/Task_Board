import { useState } from "react";

function TaskCard({task, deleteTask, moveTask, updateTask}){

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if(editText.trim()) {
      updateTask(task.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  const priorityClass = `priority-${task.priority || "Medium"}`;

  return(
    <div className={`task-card ${priorityClass}`}>
      {!isEditing ? (
        <p onClick={() => setIsEditing(true)} className="task-text">
          {task.text}
        </p>
      ) : (
        <div className="task-edit">
          <input
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSave()}
            onKeyDown={(e) => e.key === "Escape" && handleCancel()}
            className="task-input"
          />
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={handleCancel} className="cancel-btn">Cancel</button>
        </div>
      )}

      <div className="task-buttons">
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
    </div>
  );
}

export default TaskCard;
