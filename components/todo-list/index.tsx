import React from 'react';
import { Todo, TodoCard } from '../todo-card';
import styles from './TodoList.module.css';

export type TodoListProps = {
    todoList: Todo[];
    onClickDone: (todoId: number) => void;
}

export const TodoList = ({ todoList, onClickDone} : TodoListProps) => (
    <ol className={styles.listContainer}>
        {todoList.map((item, index) => (
           <li key={`todo-${index}`}><TodoCard todo={item} onClickDone={onClickDone}/></li>
        ))}
    </ol>
)