import React from 'react';

import './style.css';
import TodoItem from './TodoItem';

//This is a component called App.
//This is the main component.
function App() {
  return (
    <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />  
    </div>
  );
} 

export default App;
