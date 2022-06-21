import React, { useState } from "react";

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
          {items.map((item) => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
