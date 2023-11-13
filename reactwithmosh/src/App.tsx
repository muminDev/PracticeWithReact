import ListGroup from "./components/ListGroup.tsx";

function App() {
  const items = ["Munich", "Warsaw", "Berlin", "Tokio"];
  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
