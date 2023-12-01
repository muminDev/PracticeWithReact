import { useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Buttons.tsx";
import Listgroup from "./components/ListGroup.tsx";
import { AiFillAmazonCircle } from "react-icons/ai";
import Like from "./components/Like.tsx";
import NavBar from "./components/NavBar.tsx";
import Form from "./components/form.tsx";
import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import ExpenceFilter from "./expense-tracker/components/ExpenceFilter.tsx";
import ExpenseForm from "./expense-tracker/ExpenseForm.tsx";
//import categories from "./expense-tracker/categories.ts";

function App() {
  const items = ["Warsaw", "Berlin", "Ottava", "Munich"];
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [quantity, setQuantity] = useState(0); // Using state to manage quantity

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // data for expenses list
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 5,
      category: "Utilities",
    },
    {
      id: 2,
      description: "ajkd",
      amount: 2,
      category: "Utilities",
    },
    {
      id: 3,
      description: "aaazsdv",
      amount: 5,
      category: "Utilities",
    },
    {
      id: 4,
      description: "aaaasa",
      amount: 5,
      category: "Utilities",
    },
  ]);

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
      <Form />
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
              amount: parseFloat(expense.amount),
            },
          ])
        }
      />
      <ExpenceFilter onSelectCategory={(category) => console.log(category)} />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
