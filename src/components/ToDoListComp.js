import React from "react";
import {RiDeleteBinLine} from "react-icons/ri";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";

const ToDoListComp = ({tasks, onTaskDelete, onTaskFavoriteClick}) => {
    
    return (               
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <div >
                        {task.task}
                    </div>
                    <div className="icons">                        
                        {task.isFavorite ? <AiFillStar onClick={() => onTaskFavoriteClick(task.id)} /> : <AiOutlineStar onClick={() => onTaskFavoriteClick(task.id)}/>}                
                        
                        <RiDeleteBinLine onClick={() => onTaskDelete(task.id)} />
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ToDoListComp;