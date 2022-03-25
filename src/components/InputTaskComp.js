import React, { useState } from "react";

const InputTaskComp = ({onFormSubmit, createTask}) => {
    
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(inputText);
        setInputText("");
    }
        
    
    return (
        <form className="todoform" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" 
            onChange={(e) => setInputText(e.target.value)} 
            value={inputText}
            placeholder = "Enter your todo task" 
            name = "todo-task" />
        </form>
    );
}

export default InputTaskComp;