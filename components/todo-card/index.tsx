import React, { useState } from 'react';
import styles from './TodoCard.module.css';
export type Todo = {
    id: number;
    name: string;
    isDone: boolean;
}

export type TodoProps = {
    todo: Todo;
    onClickDone: (todoId: number) => void;
}

export const TodoCard = ({ todo, onClickDone } : TodoProps) => {
    const { id, name, isDone: isDoneInitial } = todo;
    const [ isDone, setIsDone ] = useState(isDoneInitial);
    const onTodoChange = () => {
        setIsDone(true);
        onClickDone(id);
    }

    return ( <p className={styles.todoContainer}>
        <input type="checkbox" checked={isDone}
        className={styles.todoCheckbox}
        onChange={onTodoChange} disabled={isDone}/>
        <span className={styles.todoText}> {name}</span> 
         </p>)
}