import React from 'react';

import './style.css';
import TodoItem from './TodoItem';
import todosData from './todosData'

//This is a component called App.
//This is the main component.
function App() {

  const TodoItems = todosData.map( item =>
      <TodoItem id={item.id} item={item}/> 
    )

  return (
    <div className="todo-list">
      {TodoItems}
    </div>
  );
} 

export default App;
