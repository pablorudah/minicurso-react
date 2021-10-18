
import React, { useState } from "react";
import Tasks from './components/Tasks';
import "./App.css";
import AddTask from "./components/AddTask";

const App = () => {

  
  const [tasks, setTasks] = useState([
    {
      id: '1', 
      title: 'Estudar Programação', 
      completed: false, 
    }, 
    {
      id: '2',
      title: 'Descansar os olhos do PC',
      completed: true,
    },
    {
      id: '3',
      title: 'Levantar da cadeira',
      completed: true,
    },
    {
      id: '4',
      title: 'Preparar café da manhã',
      completed: false,
    }
  ]);

  return (
    <>
      <div className="container">  
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
        
          
    </>
  );

}

export default App;
