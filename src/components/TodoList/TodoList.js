import React, { useState } from 'react';
import TodoItems from '../TodoItems/TodoItems';
import styles from './TodoList.module.css';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: title,
      },
    ]);
    setTitle('');
  };
  const deleteHandler = (id) => {
    let filtered = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filtered);
  };
  return (
    <div className={styles.todo}>
      <h1 className={styles.todoHeader}>TodoList</h1>
      <form action="" className={styles.todoForm} onSubmit={addTodo}>
        <input
          type="text"
          placeholder="New Todo"
          className={styles.todoFormInput}
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.todoFormSubmit}>ADD</button>
      </form>
      <TodoItems todos={todos} deleteHandler={deleteHandler} />
    </div>
  );
}

export default TodoList;
