import { useState } from "react";

function Listgroup() {
  const cities = ["Ottava", "Berlin", "Munich", "Warsaw", "Paris"];
  const [selectedItem, setSelectedItem] = useState(-1);
  const renderedList = cities.map((item, index) => (
    <li
      key={index}
      className={
        selectedItem === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedItem(index);
      }}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>no items found</p>}
      <ul className="list-group">{renderedList}</ul>
    </>
  );
}

export default Listgroup;
