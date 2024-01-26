import React,{Dispatch,SetStateAction, useState} from 'react';
import todoservice from '../todoservice';
import TodoTypes from '../todo';
import "../css/TodoForm.css";

interface PropTypes {
    setTodos : Dispatch<SetStateAction<TodoTypes[]
    >>
}

const TodoForm:React.FC<PropTypes> = 
({setTodos}) => {

    const [newTodoText, setNewTodoText] = useState<string>("");
    const handleAddTodo = () => {
        if(newTodoText.trim()!== "") {
            const newTodo = todoservice.addTodos
            (newTodoText);
            setTodos((prevTodo) =>[...prevTodo, newTodo] );
            setNewTodoText("");
        }
    };
    return (
    <div className="inputForm">
        <input type="text" value={newTodoText} 
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus = {true}
        placeholder="Add Task"
        />
        <button  onClick={handleAddTodo}>
        Add Task
        </button>
        </div>
  );
};

export default TodoForm;