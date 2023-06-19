import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { TodoList } from '../components/todo-list';
import { TODOS } from '../constants';
import { Todo } from '../components/todo-card';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      defaultTodos: TODOS
    },
  }
}
export default function Home({defaultTodos}) {

  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const { t } = useTranslation('common');

  const handleClickDone = (todoId) => {
    let todoIndex = todos.findIndex(todo => todo.id === todoId);
    let updatedTodo = {...todos[todoIndex], isDone: true};

    let updatedTodos = [...todos]
    updatedTodos[todoIndex] = updatedTodo;

    setTodos(updatedTodos);
    
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('header')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('title')}
        </h1>
        <TodoList todoList={todos} onClickDone={handleClickDone}/>
      </main>
    </div>
  )
}
