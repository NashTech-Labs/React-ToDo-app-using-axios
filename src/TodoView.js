import React, {useState, useEffect} from 'react'
import classes from './TodoView.module.css';

const TodoView = (props) => {
    const [doneTodo, setDoneTodo] = useState(props.todo.done)

    useEffect(() => {
        setDoneTodo(props.todo.done)
    }, [props.todo.done])

    return (
        <div className={classes.todo}>
            <input checked={doneTodo} onChange={() => props.changeTodoStatus({...props.todo, done:!doneTodo})} type='checkbox' style={{marginRight: "5px"}}/>
            <span>{props.todo.name}</span>
            <button onClick={() => props.dltTodo(props.todo.id)} className={classes.deleteBtn}>Delete</button>
        </div>
    )
}

export default TodoView;
