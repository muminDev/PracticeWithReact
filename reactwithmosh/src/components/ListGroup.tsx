import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function Listgroup({ items, heading }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const renderedList = items.map((item, index) => (
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
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className="list-group">{renderedList}</ul>
    </>
  );
}

export default Listgroup;
