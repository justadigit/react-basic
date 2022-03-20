import React from 'react';
import './TodoItems.css';
function TodoItems(props) {
  const { todos, deleteHandler } = props;
  return (
    <div className="todoItems">
      {todos.length ? (
        todos.map((todo) => {
          return (
            <span className="todoItem" key={todo.id}>
              {todo.title}
              <button onClick={() => deleteHandler(todo.id)}>X</button>
            </span>
          );
        })
      ) : (
        <h1>There is no list!</h1>
      )}
    </div>
  );
}

export default TodoItems;
