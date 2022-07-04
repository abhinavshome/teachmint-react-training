import { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Mango" },
    { id: 2, name: "Guava" },
    { id: 3, name: "banana" },
    { id: 4, name: "Waterelon" },
  ]);

  const [newFruit, setNewFruit] = useState("");

  const addToList = () => {
    setFruits(
      fruits.concat({
        id: fruits.length + 1,
        name: newFruit,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      {newFruit}
      <button onClick={addToList}>Add</button>
      <ul>
        {fruits.map((f) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
