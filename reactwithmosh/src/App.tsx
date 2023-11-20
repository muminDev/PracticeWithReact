import { useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Buttons.tsx";
import Listgroup from "./components/ListGroup.tsx";

function App() {
  const items = ["Warsaw", "Berlin", "Ottava", "Munich"];
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Please check your internet !
        </Alert>
      )}
      <Button
        color="success"
        children="Show Alert"
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
      <Listgroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
