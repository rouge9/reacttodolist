import React, { useState } from "react";
import Todolist from "./todolist";

function App() {
  const [item, addlist] = useState("");
  const [items, setitems] = useState([]);

  function handlelist(event) {
    const newValue = event.target.value;
    addlist(newValue);
  }

  function handleitem() {
    setitems((prev) => [...prev, item]);
    addlist("");
  }

  function deleteItem(id) {
    setitems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlelist} type="text" value={item} />
        <button onClick={handleitem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <Todolist key={index} id={index} comp={item} fun={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
