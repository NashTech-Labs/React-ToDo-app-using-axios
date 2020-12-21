import './App.css';
import TodoList from "./TodoList";
import React, {useEffect, useState} from "react";
import AddTodo from "./AddTodo";
import axiosInstance from "./axios/TodoAxiosInstance";

function App() {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        axiosInstance.get('/todos')
            .then(res => {
                setTodos(res.data)
            })
    }, [])

    const deleteTodo = (id) => {
        axiosInstance.delete('/todos/' + id)
            .then(res => {
                const updatedTodos = todos.filter(todo => todo.id !== id)
                setTodos(updatedTodos);
            })
    }

    const addTodo = (name) => {
        axiosInstance.post('/todos',{name: name})
            .then(res => {
                setTodos(prevState => [...prevState, res.data]);
            })
    }

    const changeTodoStatus = (updatedState) => {
        axiosInstance.put('/todos/' + updatedState.id,
            {...updatedState})
            .then(res => {
                setTodos(prevState => prevState.map(todo => (todo.id === res.data.id ? {...todo, done: res.data.done} : todo)))
            })
    };

    return (
        <div>
            <TodoList
                todos={todos}
                onDltTodo={(id) => deleteTodo(id)}
                onTodoStatusChange = {(updatedState) => changeTodoStatus(updatedState)}
            />
            <hr/>
            <AddTodo onAddTodo={(name) => addTodo(name)}/>
        </div>
    );
}

export default App;
