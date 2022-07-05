import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
    </div>
  );
};

export default Counter;
