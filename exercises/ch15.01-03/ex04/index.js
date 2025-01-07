/* 全体のスタイル */
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 20px;
}

/* タイトルのスタイル */
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

/* フォームのスタイル */
#new-todo-form {
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

#new-todo {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  outline: none;
}

#new-todo:focus {
  border-color: #007bff;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* Todoリストのスタイル */
#todo-list {
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

li .view {
  display: flex;
  align-items: center;
  flex: 1;
}

li .toggle {
  margin-right: 10px;
  cursor: pointer;
}

li .content {
  font-size: 16px;
  color: #333;
}

li.completed .content {
  text-decoration: line-through;
  color: #aaa;
}

li .destroy {
  background: none;
  border: none;
  font-size: 18px;
  color: #e74c3c;
  cursor: pointer;
  transition: color 0.3s;
}

li .destroy:hover {
  color: #c0392b;
}
