import { useState } from "react";
import Column from "./Column";

function Board(){

  const [tasks, setTasks] = useState([]);

  function addTask(text){
    setTasks([...tasks, {id: Date.now(), text, status:"todo"}]);
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

  return(
    <div className="board">
      <Column title="To Do"
        status="todo"
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />

      <Column title="In Progress"
        status="progress"
        tasks={tasks}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />

      <Column title="Done"
        status="done"
        tasks={tasks}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />
    </div>
  );
}

export default Board;

