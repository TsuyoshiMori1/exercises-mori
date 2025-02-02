'use client'; // クライアントコンポーネントとして実行

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([]); // ToDoリストの状態
  const [newTodo, setNewTodo] = useState(''); // 入力フィールドの状態

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Simple ToDo</h1>

      <form onSubmit={addTodo} className={styles.todoForm}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>

      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={styles.todoText}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className={styles.deleteButton}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
