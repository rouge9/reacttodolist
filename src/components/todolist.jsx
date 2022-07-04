import React, { useState } from "react";

function Todolist(props) {
  return (
    <div
      onClick={() => {
        return props.fun(props.id);
      }}
    >
      <li>{props.comp}</li>
    </div>
  );
}

export default Todolist;
