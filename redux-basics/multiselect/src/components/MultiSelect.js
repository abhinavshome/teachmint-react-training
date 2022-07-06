import { useDispatch, useSelector } from "react-redux";

const MultiSelect = () => {
  const { fruits, selectedFruits } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      <div>
        {fruits.map((fruit) => (
          <div
            style={{
              backgroundColor: selectedFruits.includes(fruit)
                ? "red"
                : "lightgray",
            }}
            onClick={() =>
              selectedFruits.includes(fruit)
                ? dispatch({ type: "UNSELECT_FRUIT", payload: fruit })
                : dispatch({ type: "SELECT_FRUIT", payload: fruit })
            }
          >
            {fruit}
          </div>
        ))}
      </div>
      <div>
        <div>
          <h3>Selected Fruits</h3>
          {selectedFruits.map((fruit) => (
            <span>{fruit},</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
