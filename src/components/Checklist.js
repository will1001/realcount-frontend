import React, { useState } from "react";

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: "DPR RI", checked: false },
    { id: 2, text: "DPRD PROV", checked: false },
    { id: 3, text: "DPRD KOTA", checked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    console.log(updatedItems);
  };

  return (
    <div>
      <h2>Checklist</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
