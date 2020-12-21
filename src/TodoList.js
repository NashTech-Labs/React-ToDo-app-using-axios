import React from 'react';
import TodoView from "./TodoView";

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map( todo => <TodoView
                key={todo.id}
                todo={todo}
                dltTodo={(id) => props.onDltTodo(id)}
                changeTodoStatus={(updatedState) => props.onTodoStatusChange(updatedState)}
            />)}
        </div>
    )
}

export default TodoList
