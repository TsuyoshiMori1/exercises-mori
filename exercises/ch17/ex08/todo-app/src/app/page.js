"use strict";
'use client'; // クライアントコンポーネントとして実行
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const react_1 = require("react");
const page_module_css_1 = __importDefault(require("./page.module.css"));
function Home() {
    const [todos, setTodos] = (0, react_1.useState)([]); // ToDoリストの状態
    const [newTodo, setNewTodo] = (0, react_1.useState)(''); // 入力フィールドの状態
    const addTodo = (e) => {
        e.preventDefault();
        if (!newTodo.trim())
            return;
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
        setNewTodo('');
    };
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo));
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (<div className={page_module_css_1.default.container}>
      <h1>Simple ToDo</h1>

      <form onSubmit={addTodo} className={page_module_css_1.default.todoForm}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="What needs to be done?" className={page_module_css_1.default.input}/>
        <button type="submit" className={page_module_css_1.default.addButton}>
          Add
        </button>
      </form>

      <ul className={page_module_css_1.default.todoList}>
        {todos.map((todo) => (<li key={todo.id} className={`${page_module_css_1.default.todoItem} ${todo.completed ? page_module_css_1.default.completed : ''}`}>
            <span onClick={() => toggleTodo(todo.id)} className={page_module_css_1.default.todoText}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} className={page_module_css_1.default.deleteButton}>
              ✕
            </button>
          </li>))}
      </ul>
    </div>);
}
