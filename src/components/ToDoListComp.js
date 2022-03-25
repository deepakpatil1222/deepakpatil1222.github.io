import React, { useState } from "react";
import {RiDeleteBinLine} from "react-icons/ri";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import ReactPaginate from "react-paginate";

const ToDoListComp = ({tasks, onTaskDelete, onTaskFavoriteClick}) => {
    
    const [pageNumber, setPageNumber] = useState(0);

    const tasksPerPage = 4;
    const pagesVisited = pageNumber * tasksPerPage;
    const pageCount = Math.ceil(tasks.length / tasksPerPage);
    const displayTasks = tasks
    .slice(pagesVisited, pagesVisited + tasksPerPage)
    .map(task => (
        <div key={task.id} className="todo-row">
            <div >
                {task.task}
            </div>
            <div className="icons">                        
                {task.isFavorite ? <AiFillStar onClick={() => onTaskFavoriteClick(task.id)} /> : <AiOutlineStar onClick={() => onTaskFavoriteClick(task.id)}/>}                
                
                <RiDeleteBinLine className='delete-icon' onClick={() => onTaskDelete(task.id)} />
            </div>
        </div>

    ));
    
    const onPageChange = ({selected}) => {
        setPageNumber(selected);
    }  

    return (               
            <div>
                {displayTasks}
                {tasks.length > 4 && (
                    <ReactPaginate 
                    previousLabel = {"Previous"}
                    nextLabel = {"Next"}
                    pageCount = {pageCount}
                    onPageChange = {onPageChange}
                    containerClassName = {"paginationButtons"}
                    previousLinkClassName = {"previousButton"}
                    nextLinkClassName = {"nextButton"}
                    disabledClassName = {"paginationDisabled"}
                    activeClassName = {"paginationActive"}
                />
                )}
            </div>        
    );
};

export default ToDoListComp;