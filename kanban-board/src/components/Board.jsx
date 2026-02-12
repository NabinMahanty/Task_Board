import { useState, useEffect } from "react";
import Column from "./Column";

function Board(){

  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("kanbanTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text, priority = "Medium"){
    setTasks([...tasks, {id: Date.now(), text, status:"todo", priority}]);
  }

  function deleteTask(id){
    setTasks(tasks.filter(t => t.id !== id));
  }

  function moveTask(id, newStatus){
    setTasks(
      tasks.map(t =>
        t.id === id ? {...t, status:newStatus} : t
      )
    );
  }

  function updateTask(id, newText){
    setTasks(
      tasks.map(t =>
        t.id === id ? {...t, text:newText} : t
      )
    );
  }

  return(
    <div className="board">
      <Column title="To Do"
        status="todo"
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        updateTask={updateTask}
      />

      <Column title="In Progress"
        status="progress"
        tasks={tasks}
        deleteTask={deleteTask}
        moveTask={moveTask}
        updateTask={updateTask}
      />

      <Column title="Done"
        status="done"
        tasks={tasks}
        deleteTask={deleteTask}
        moveTask={moveTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default Board;

