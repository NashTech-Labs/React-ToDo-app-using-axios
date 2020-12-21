import React, {useState} from 'react';

const AddTodo = (props) => {
    const [todoName, setTodoName] = useState('')

    return (
        <div style={{margin: '5px'}}>
            <input type='text' onChange={(event) => setTodoName(event.target.value)}/>
            <button onClick={() => props.onAddTodo(todoName)}>Add</button>
        </div>
    )
}

export default AddTodo
