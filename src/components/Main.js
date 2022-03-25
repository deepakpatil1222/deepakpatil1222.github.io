import React, { useState } from "react";
import InputTaskComp from "./InputTaskComp";
import ToDoListComp from "./ToDoListComp";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

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
        confirmAlert({
            title : "Confirm to Delete",
            message : "Are you sure to do this.",
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => setTasks([...tasks].filter(task => task.id !== taskId))
                },
                {
                  label: 'No',
                  onClick: ""
                }
              ]
        });
    }
    const onTaskFavoriteClick = taskId => {
        const newTasks = [...tasks].map(task => {
            return task.id === taskId ? {...task, isFavorite : !task.isFavorite} : task;
             
        });
        setTasks(newTasks.sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite)));
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