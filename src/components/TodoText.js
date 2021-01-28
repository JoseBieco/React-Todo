import React from 'react'

const TodoText = ({ inputText, setInputText, todo, text}) => {

    const editInputHendler = (e) => {
        setInputText(e.target.value);
    }

    const editSubmitHendler = (e) => {
        return {
           todo, isEditing: !todo.isEditing, text: inputText
        }
    }

    if(todo.isEditing){
        return(
            <form>
                <input value={text} type="text" onChange={editInputHendler} className="todo-item"></input>
                <button onClick={editSubmitHendler} className="complete-btn" type="submit">
                <i class="fas fa-check-double"></i>
                </button>
            </form>
        );
    }else{
        return(
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> 
        );
    }
}

export default TodoText;