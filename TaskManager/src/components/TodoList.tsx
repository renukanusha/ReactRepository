import React, {useState} from 'react';
import TodoTypes from '../todo';
import todoservice from '../todoservice';
import { FaEdit,FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import TodoForm from './TodoForm';
import "../css/TodoList.css";

const TodoList = () => {

    const [todos,setTodos] = useState<TodoTypes[]>(todoservice.getTodos());
    const [editingTodoId, setEditedTodoId] = useState<number | null > (null);
    const[editedTodoText, setEditedTodoText] = useState<string>("")

    //function for handing edit Actions
    const handleEditStart = (id:number, text:string) => {
        setEditedTodoId(id);
        setEditedTodoText(text);
    };

    const handleEditCancle =() => {
        setEditedTodoId(null);
        setEditedTodoText("");
    };

    const handleEditSave =(id:number) => {
        if(editedTodoText.trim() !== '')
        {
            const updateTodo = todoservice.updateTodo({
                id,
                text:editedTodoText,
                completed: false
            });
            setTodos((prevTodos)=> prevTodos.map((todo) => (todo.id === id ? updateTodo : todo)));


            setEditedTodoId(null);
            setEditedTodoText("");

        }
    };

    //function to delete todo

    const handleDeleteTodo = (id:number) => {
        todoservice.deleteTodo(id);
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    }; 

    const [show, toggleShow]=useState(true);

  return (
    <div className="todoContainer">
        <div>
            <TodoForm setTodos = {setTodos} />
        </div>
        <div className="todos">
        {todos.map((todo) => (
            <div className="items" key={todo.id}>
                {editingTodoId == todo.id ?(
                    <div className="editText">
                        <input type="text" value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)}
                         autoFocus = {true}/>
                    
                    <button onClick={() => handleEditSave(todo.id)}>
                        <FaCheck />
                    </button>

                    <button className="cancleBtn" onClick={ () => handleEditCancle()}>
                        <GiCancel />
                    </button>

                    </div>
                        ) : (
                        <div className="editBtn">
                        <span>
                            {todo.text}
                        </span>
                        <button onClick={ () => handleEditStart(todo.id, todo.text)}>
                            <FaEdit />
                        </button>
                    </div>
                )}
                <button onClick={() => handleDeleteTodo(todo.id)}>
                        <RiDeleteBin5Fill/>
                </button>
                <button onClick={() => toggleShow(!show)} style={{color : show === true ? 'red' : 'green'}}>
                    {show === true ? "Incomplete" : "Completed"}</button>
            </div>
        ))}
        </div>
        </div>
  )
};
export default TodoList;