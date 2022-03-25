import React, { useState } from "react";
import InputTaskComp from "./InputTaskComp";
import ToDoListComp from "./ToDoListComp";

let id = 0;
const Main = () => {
    
    const [tasks, setTasks] = useState([]);

    const createTask = (task) => {
        if(task.trim() == ""){
            alert("Task can\'t be empty");
            return;
        } else {
            setTasks([...tasks, {task: task, id : ++id, isFavorite: false}]);
        }
    }    
    
    const onTaskDelete = (taskId) => {
        setTasks([...tasks].filter(task => task.id !== taskId));
    }
    const onTaskFavoriteClick = taskId => {
        const newTasks = [...tasks].map(task => {
            return task.id === taskId ? {...task, isFavorite : !task.isFavorite} : task;
             
        });
        setTasks(newTasks);
    }

    return (
        <>
            <h1>Todo list</h1>
            <div>            
                <InputTaskComp createTask={createTask}/>
                <ToDoListComp tasks={tasks} onTaskDelete={onTaskDelete} onTaskFavoriteClick={onTaskFavoriteClick}/>
            </div>
        </>
        
    );
}

export default Main;