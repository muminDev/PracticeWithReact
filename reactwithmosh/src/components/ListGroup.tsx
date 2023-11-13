import { useState } from "react";

function ListGroup() {
  const cars = ["Tesla", "Fiat", "Toyota", "Suzuki", "Skoda"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3 className="ml-3">List items</h3>
      <ul className="list-group">
        {cars.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
