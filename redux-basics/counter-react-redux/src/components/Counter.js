import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTION_TYPES from "../redux/actionTypes";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incBy, setIncBy] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT })}>
          +
        </button>
        <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT })}>
          -
        </button>
      </div>
      <div>
        <input
          type="number"
          value={incBy}
          onChange={(e) => setIncBy(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: ACTION_TYPES.INCREMENT_BY, payload: +incBy })
          }
        >
          ++
        </button>
      </div>
    </div>
  );
};

export default Counter;
