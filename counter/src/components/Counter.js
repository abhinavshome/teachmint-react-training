import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div>
      <hr />
      <h3>Counter</h3>
      <div>{count}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
