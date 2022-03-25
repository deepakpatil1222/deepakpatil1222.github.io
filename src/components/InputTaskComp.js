import React, { useState } from "react";

const InputTaskComp = ({onFormSubmit, createTask}) => {
    
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(inputText);
        setInputText("");
    }
        
    
    return (
        <form className="todo-form" onSubmit={(e) => handleSubmit(e)} className='todo-form'>
            <input type="text" 
            onChange={(e) => setInputText(e.target.value)} 
            value={inputText}
            placeholder = "Enter your todo task" 
            name = "todo-task"
            className='todo-input' />
        </form>
    );
}

export default InputTaskComp;