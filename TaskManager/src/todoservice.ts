import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = 'todo';

const todoservice = {
    //get todos
    getTodos: () : TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY)
        return todoStr ? JSON.parse(todoStr) : [];
    },

    //Adding todos
    addTodos: (text:string):TodoTypes => {
        const todos= todoservice.getTodos();
        const newTodo : TodoTypes = {id: todos.length+1, text, completed: false}; 
        const updateTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return newTodo;

    },

    //updating todos
    updateTodo:(todo:TodoTypes):TodoTypes =>{
        const todos= todoservice.getTodos();
        const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return todo;
    },

    //deletind todo

    deleteTodo: (id:number):void => {
        const todos= todoservice.getTodos();

        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));

    }
};

export default todoservice;