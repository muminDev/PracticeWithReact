import { useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Buttons.tsx";
import Listgroup from "./components/ListGroup.tsx";
import { AiFillAmazonCircle } from "react-icons/ai";
import Like from "./components/Like.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  const items = ["Warsaw", "Berlin", "Ottava", "Munich"];
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [quantity, setQuantity] = useState(0); // Using state to manage quantity

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
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
      <AiFillAmazonCircle size="40" style={{ marginLeft: "30px" }} />
      <Like size={30} />
      <NavBar CartCount={quantity} OnClickHandler={increaseQuantity} />
    </div>
  );
}

export default App;
