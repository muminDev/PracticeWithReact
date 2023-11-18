import Listgroup from "./components/ListGroup.tsx";

function App() {
  const cities = ["Ottava", "Berlin", "Munich", "Warsaw", "Paris"];
  return (
    <div>
      <Listgroup items={cities} heading="Cities" />
    </div>
  );
}

export default App;
