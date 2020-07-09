import React from 'react';


function TodoItem(props) {
  var item=props.item
  return (
    <div className="todo-item">
      <input type="checkbox" checked={item.completed}/>
      <p>{item.text}</p>
    </div>
  );
}

export default TodoItem;
