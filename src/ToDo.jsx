import { useState } from "react";
function ToDo() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addToList(e) {
    e.preventDefault();
    if (newItem.trim()) {
      setList([...list, newItem]);
      setNewItem("");
    }
  }

  function swapUp(index) {
    if (index !== 0) {
      const newList = [...list];
      [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];
      setList(newList);
    }
  }

  function swapDown(index) {
    if (index < list.length - 1) {
      const newList = [...list];
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
      setList(newList);
    }
  }

  function deleteFromList(index) {
    setList(list.filter((_, i) => i !== index));
  }

  return (
    <div className="todo-container">
      <div className="todo-content">
        <h2 className="todo-title">To-Do List</h2>
        
        <form onSubmit={addToList} className="todo-form">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter a task here"
            className="todo-input"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>

        <ul className="todo-list">
          {list.map((item, index) => (
            <li key={index} className="todo-item">
              <span className="todo-text">{item}</span>
              <div className="todo-actions">
                <button
                  onClick={() => swapUp(index)}
                  disabled={index === 0}
                  className="action-button move-button"
                >
                  ↑
                </button>
                <button
                  onClick={() => swapDown(index)}
                  disabled={index === list.length - 1}
                  className="action-button move-button">
                  ↓
                </button>
                <button
                  onClick={() => deleteFromList(index)}
                  className="action-button delete-button">
                  × 
                </button>
              </div>
            </li>
          ))}
        </ul>
        
        {list.length === 0 && (
          <p className="empty-message">
            No tasks yet. Add some tasks to get started!
          </p>
        )}
      </div>
    </div>
  );
}

export default ToDo;