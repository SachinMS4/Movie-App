import React from "react";

function Button({ setCount, count }) {
  return (
    <>
      <button onClick={() => setCount(0)}>reset</button>{" "}
      <button onClick={() => setCount(++count)}>increment</button>
    </>
  );
}

export default Button;
