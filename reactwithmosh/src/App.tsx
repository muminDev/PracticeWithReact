import Listgroup from "./components/ListGroup.tsx";
import Alert from "./components/alert.tsx";

function App() {
  const cities = ["Ottava", "Berlin", "Munich", "Warsaw", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Listgroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert>Please check your internet !</Alert>
    </div>
  );
}

export default App;
