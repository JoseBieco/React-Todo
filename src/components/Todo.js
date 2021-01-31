import React from "react";

const Todo = ({ todo, todos, setTodos, text, inputText, setInputText }) => {
    // Events
    const deleteHendler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const completedHendler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    const completedEditHendler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id ){
                return {
                    ...item, editing: !item.editing, text: inputText
                }
            }
            return item;
        }))

        setInputText("");
    };

    const editHendler = () => {
        setInputText(text);
        setTodos(todos.map((item) => {
            if(item.id === todo.id ){
                return {
                    ...item, editing: !item.editing
                }
            }
            return item;
        }))
    };

    const attTextHendler = (e) => {
        setInputText(e.target.value);
    }; 

    if(todo.editing){
        return(
            <div className="todo">
                {/* FIX: Pegar o texto da prop e colocar no input
                    TIP: nao funciona no value
                    TINK: setInputText, testar dessa maneira    
                */}
                <input onChange={attTextHendler} value={inputText} type="text"></input>
                <button onClick={completedEditHendler} className="complete-btn">
                        <i className="fas fa-check"></i>
                </button>
            </div>
        );
    }
    else {
        return(
            <div className="todo">
                { 
                    // Teste editing no className editing
                }
                <li className={`todo-item ${todo.completed ? "completed"  : ""}`}>{text}</li>
                <button onClick={editHendler} className="edit-btn">
                    <i className="fas fa-edit"></i>
                </button>
                <button onClick={completedHendler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHendler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        );
    }
}

export default Todo;