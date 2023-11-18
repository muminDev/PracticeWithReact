import Listgroup from "./components/ListGroup.tsx";
import Alert from "./components/alert.tsx";
import Button from "./components/buttons.tsx";

function App() {
  const cities = ["Ottava", "Berlin", "Munich", "Warsaw", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const onClickButton = () => {
    console.log("Heyy");
  };
  return (
    <div>
      <Listgroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert>Please check your internet !</Alert>
      <Button color="success" children="Hello" onClick={onClickButton} />
    </div>
  );
}

export default App;
