import styled from "styled-components";

// styling componenets
const List = styled.ul`
  margin: 30px;
  padding: 0px;
  border: none;
`;

const ListItems = styled.li`
  padding: 15px;
  list-style: none;
  border: solid 1px black;
  margin: 8px;
  border-radius: 8px;

  &:hover {
    background-color: lightgray; /* Define the style changes on hover */
    cursor: pointer; /* Optional: Change cursor on hover */
  }
`;

interface Props {
  items: string[];
  heading: string;
}

function Listgroup({ items, heading }: Props) {
  const renderedList = items.map((item) => <ListItems>{item}</ListItems>);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items found</p>}
      <List>{renderedList}</List>
    </>
  );
}

export default Listgroup;
