import React from "react";

const Form = (props) => {

    <div className="div va"></div>
    const inputTextHendler = (e) => {
        //console.log(e.target.value);
        props.setInputText(e.target.value);
    };

    const incremenetId = () => {
        props.setId(props.id+1);
    }

    const submitTodoHendler = (e) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos, 
            {text: props.inputText, completed: false, id: props.id},
        ]);
        props.setInputText("");
        incremenetId();
    };

    const statusHendler = (e) => {
        props.setStatus(e.target.value);
    }

    return(
        <form>
            <input value={props.inputText} onChange={inputTextHendler} type="text" className="todo-input" />
            <button onClick={submitTodoHendler} className="todo-button" type="submit">
                 <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHendler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;